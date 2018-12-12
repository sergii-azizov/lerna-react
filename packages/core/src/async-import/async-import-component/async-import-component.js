import React, { PureComponent, Fragment } from "react";
import { bool, string, node } from 'prop-types';
import { reduce, forEach, get, set, isEqual } from 'lodash';

import { APP } from '../../../../../configs/namespace.config';
import { STATIC_SERVER, PACKAGE_STATUSES } from "../../constants.js";

import {
    notify,
    destroy,
    getLoadPackage,
    injectAsyncReducer,
    increasedLoadedComponents
} from '../helpers';

export const asyncImportComponent = (packageName, configs = {}, promise) => {
    if (!packageName) return () => Promise.resolve(null);

    const {
        server = STATIC_SERVER,
        component = 'default',
        destroyOnUnmount = true,
        loadingComponent = null,
        reducer = 'rootReducer'
    } = configs;

    class asyncImportComponent extends PureComponent {
        constructor(props) {
            super(props);
            this.init()
        }

        init() {
            const LoadedComponent = getLoadPackage([packageName, component]);
            const loadingPackage = getLoadPackage([packageName, 'then']);

            this.state = { LoadedComponent };

            if (loadingPackage) {
                this.loadingPackage(packageName);
            } else if (LoadedComponent) {
                this.mountLoadedComponent(packageName, PACKAGE_STATUSES.FROM_CACHE);
            } else if (!LoadedComponent) {
                this.loadPackage(packageName);
            }
        }

        loadingPackage = packageName => {
            getLoadPackage(packageName).then(() => {
                this.setState({ LoadedComponent: getLoadPackage([packageName, component]) });
                this.mountLoadedComponent(packageName, PACKAGE_STATUSES.FROM_CACHE);
            });
        };

        mountLoadedComponent = (packageName, fromCache) => {
            injectAsyncReducer({ packageName, reducer });

            if (!fromCache) {
                this.resolve && this.resolve();
                this.setState({ LoadedComponent: getLoadPackage([packageName, component]) });
            }

            increasedLoadedComponents({ packageName, module: component });
            notify({ packageName, module: component, state: fromCache || PACKAGE_STATUSES.LOADED });
        };

        loadPackage(packageName) {
            const isModuleLoaded = get(window.APP, [packageName]);

            if (!isModuleLoaded) {
                set(window[APP], [packageName], promise().then((pkg) => {
                    window[APP][packageName] = pkg;
                    this.mountLoadedComponent(packageName)
                }));
            }
        }

        componentWillUnmount() {
            destroy({ packageName, module: component, destroyOnUnmount });
        }

        render() {
            const { LoadedComponent } = this.state;

            return (
                <Fragment>
                    {LoadedComponent ? <LoadedComponent {...this.props} /> : loadingComponent}
                </Fragment>
            );
        }
    }

    return asyncImportComponent;
};
