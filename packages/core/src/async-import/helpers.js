import { get, set } from "lodash";

import { APP } from "../../../../configs/namespace.config";
import { ASYNC_REDUCERS, COMPONENTS_COUNT, ASYNC_IMPORT, PACKAGE_NAMES, TOTAL_IMPORT } from "../constants";
import { createReducer, store } from "../index";

export const getAvailablePackageNames = packages => packages.filter(packageName => PACKAGE_NAMES[packageName]);

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

export const getImportCount = ({ packageName, name }) => {
    return get(window[APP], [COMPONENTS_COUNT, packageName, name], 0);
};

export const increasedLoadedComponents = ({ packageName, module }) => {
    if (module) {
        set(window[APP], [COMPONENTS_COUNT, packageName, module], getImportCount({ packageName, name: module }) + 1);
    } else {
        set(window[APP], [COMPONENTS_COUNT, packageName, ASYNC_IMPORT], getImportCount({ packageName, name: ASYNC_IMPORT }) + 1);
    }
    set(window[APP], [COMPONENTS_COUNT, packageName, TOTAL_IMPORT], getImportCount({ packageName, name: TOTAL_IMPORT }) + 1);
};

export const decreasedLoadedComponents = ({ packageName, module }) => {
    if (module) {
        set(window[APP], [COMPONENTS_COUNT, packageName, module], getImportCount({ packageName, name: module }) - 1);
    } else {
        set(window[APP], [COMPONENTS_COUNT, packageName, ASYNC_IMPORT], getImportCount({ packageName, name: ASYNC_IMPORT }) - 1);
    }
    set(window[APP], [COMPONENTS_COUNT, packageName, TOTAL_IMPORT], getImportCount({ packageName, name: TOTAL_IMPORT }) - 1);
};

export const injectAsyncReducer = ({ packageName, reducer }) => {
    const asyncReducers = get(window[APP], [packageName, reducer]);

    if (asyncReducers && !get(store, [ASYNC_REDUCERS, packageName])) {
        set(store, [ASYNC_REDUCERS, packageName], asyncReducers);
        store.replaceReducer(createReducer(store[ASYNC_REDUCERS]));
    }
};

export const notify = ({ packageName, module, state }) => {
    try {
        if (get(JSON.parse(window.localStorage.getItem(APP)), 'DEBUG')) {
            const moduleMsg = module ? `[Component][${module}]` : '';

            console.groupCollapsed(`[Package][%s][%s]${moduleMsg}`, packageName, state);
            console.log('[The total count imports of the components from the chunk %d on the screen]', getImportCount({ packageName, name: module || TOTAL_IMPORT }));
            console.groupEnd();
        }
    } catch (e) {
        console.error(e);
    }
};

export const destroy = ({ packageName, module = ASYNC_IMPORT, destroyOnUnmount } = {}) => {
    decreasedLoadedComponents({ packageName, module });

    const hasLoadedComponents = getImportCount({ packageName, name: TOTAL_IMPORT }) !== 0;
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

        notify({ packageName, state: 'Cleared' });
    }
};
