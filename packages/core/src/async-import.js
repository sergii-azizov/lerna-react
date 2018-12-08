import React, { PureComponent, Fragment } from "react";
import { bool, string, node } from 'prop-types';
import { reduce, forEach, get, set, isEqual } from 'lodash';

import { APP } from '../../../configs/namespace.config';
import { STATIC_SERVER, PACKAGE_STATUSES } from "./constants.js";

import {
    notify,
    destroy,
    loadFile,
    getLoadPackage,
    injectAsyncReducer,
    getAvailablePackageNames,
    increasedLoadedComponents
} from './helpers';

const head = document.getElementsByTagName('head')[0];

export const asyncImport = (packages, configs = {}) => WrappedComponent => {
    const { server = STATIC_SERVER, destroyOnUnmount = true, reducer = 'rootReducer', withConnect = null } = configs;
    const availablePackageNames = getAvailablePackageNames(packages);

    if (!availablePackageNames) {
        console.groupCollapsed('No Available Packages for Loading');
        console.log(packages);
        console.groupEnd();

        return WrappedComponent;
    }

    class LoadPackages extends PureComponent {
        constructor(props) {
            super(props);
            this.state = this.getInitialState();
        }

        getInitialState() {
            return reduce(availablePackageNames, (state, packageName) => {
                const LoadedPackage = getLoadPackage(packageName);
                const loadingPackage = getLoadPackage([packageName, 'then']);

                if (loadingPackage) {
                    this.loadingPackage(packageName);
                } else if (LoadedPackage) {
                    this.mountLoadedComponent(packageName, PACKAGE_STATUSES.FROM_CACHE);
                } else if (!LoadedPackage) {
                    this.loadPackage(packageName);
                }

                return { ...state, [packageName]: LoadedPackage };
            }, {});
        }

        loadingPackage = packageName => {
            getLoadPackage(packageName).then(() => {
                this.setState({ [packageName]: getLoadPackage(packageName) });
                this.mountLoadedComponent(packageName, PACKAGE_STATUSES.FROM_CACHE);
            });
        };

        mountLoadedComponent = (packageName, fromCache) => {
            injectAsyncReducer({ packageName, reducer });

            if (!fromCache) {
                this.resolve && this.resolve();
                this.setState({ [packageName]: getLoadPackage(packageName) });
            }

            increasedLoadedComponents({ packageName });
            notify({ packageName, state: fromCache || PACKAGE_STATUSES.LOADED });
        };

        loadPackage(packageName) {
            const isModuleLoaded = get(window.APP, [packageName]);

            if (!isModuleLoaded) {
                set(window[APP], [packageName], new Promise((resolve, reject) => {
                    this.resolve = resolve;
                }));
                loadFile({ inject: head, type: 'link', url: `${server}/css/${packageName}.css`, packageName });
                loadFile({ inject: head, type: 'script', url: `${server}/js/${packageName}.js`, packageName }).then(() => {
                    this.mountLoadedComponent(packageName)
                });
            }
        }

        packagesLoaded = () => {
            return availablePackageNames.every(packageName => this.state[packageName] && !this.state[packageName].then);
        };

        componentWillUnmount() {
            availablePackageNames.forEach(packageName => {
                destroy({ packageName, destroyOnUnmount });
            });
        }

        render() {
            const packagesLoaded = this.packagesLoaded();
            const Component = withConnect && packagesLoaded
                ? withConnect(this.state)(WrappedComponent)
                : WrappedComponent;

            return (
                <Fragment>
                    {packagesLoaded ? <Component loading={!packagesLoaded} {...this.state} {...this.props} /> : null}
                </Fragment>
            );
        }
    }

    return LoadPackages;
};
