import { get, set } from "lodash";

import { APP } from "../../../configs/namespace.config";
import { ASYNC_REDUCERS, COMPONENTS_COUNT, PACKAGE_NAMES, TOTAL_COUNT } from "./constants";
import { createReducer, store } from "./index";

export const getAvailablePackageNames = packages => Object.keys(packages).filter(packageName => PACKAGE_NAMES[packageName]);

export const getLoadPackage = path => get(window[APP], path);

export const loadFile = ({ inject, url, type, onLoad, packageName }) => {
    let resolve = null;
    const el = document.createElement(type);
    const promise = new Promise((res) => { resolve = res; });

    if (type === 'script') {
        el.async = true;
        el.src = url;
    }

    el.onload = resolve;
    el.id = `__${packageName}-${type}__`;

    if (type === 'link') {
        el.rel = 'stylesheet';
        el.type = 'text/css';
        el.href = url;
    }

    inject.insertBefore(el, inject.lastChild);

    return promise;
};

export const getImportCount = (packageName, module) => {
    return get(window[APP], [COMPONENTS_COUNT, packageName, module], 0);
};

export const increasedLoadedComponents = (packageName, module) => {
    set(window[APP], [COMPONENTS_COUNT, packageName, module], getImportCount(packageName, module) + 1);
    set(window[APP], [COMPONENTS_COUNT, packageName, TOTAL_COUNT], getImportCount(packageName, TOTAL_COUNT) + 1);
};

export const decreasedLoadedComponents = (packageName, module) => {
    set(window[APP], [COMPONENTS_COUNT, packageName, module], getImportCount(packageName, module) - 1);
    set(window[APP], [COMPONENTS_COUNT, packageName, TOTAL_COUNT], getImportCount(packageName, TOTAL_COUNT) - 1);
};

export const injectAsyncReducer = (packageName, reducer) => {
    const asyncReducers = get(window[APP], [packageName, reducer]);

    if (asyncReducers && !get(store, [ASYNC_REDUCERS, packageName])) {
        set(store, [ASYNC_REDUCERS, packageName], asyncReducers);
        store.replaceReducer(createReducer(store[ASYNC_REDUCERS]));
    }
};

export const notify = (packageName, module, state) => {
    try {
        if (get(JSON.parse(window.localStorage.getItem(APP)), 'DEBUG')) {
            console.groupCollapsed('[Module][%s][%s][Component][%s]', packageName, state, module);
            console.log('[The total count imports of the components from the chunk %d on the screen]', getImportCount(packageName, module));
            console.groupEnd();
        }
    } catch (e) {
        console.error(e);
    }
};

export const destroy = (packageName, module, destroyOnUnmount) => {
    decreasedLoadedComponents(packageName, module);

    const hasLoadedComponents = getImportCount(packageName, module) !== 0;
    const canBeDestroyed = destroyOnUnmount && !hasLoadedComponents;

    if (canBeDestroyed) {
        const scriptEl = document.getElementById(`__${packageName}-script__`);
        const linkEl = document.getElementById(`__${packageName}-link__`);

        scriptEl && scriptEl.remove();
        linkEl && linkEl.remove();

        delete window[APP][COMPONENTS_COUNT][packageName];
        delete window[APP][packageName];

        if (store[ASYNC_REDUCERS]) {
            delete store[ASYNC_REDUCERS][packageName];
        }

        notify('Cleared');
    }
};
