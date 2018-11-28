import createBrowserHistory from 'history/createBrowserHistory';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(
    applyMiddleware(
        routerMiddleware(history)
    )
);

// TODO: temporary solution for debugging
window.store = createStore(createRootReducer(), middleware);

const store = window.store;

export { store, history };
