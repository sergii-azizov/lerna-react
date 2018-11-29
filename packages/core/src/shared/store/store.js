import createBrowserHistory from 'history/createBrowserHistory';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import { APP } from '../../../../../configs/namespace.config';

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(
    applyMiddleware(
        routerMiddleware(history)
    )
);

const store = window[APP].store = createStore(createRootReducer(), middleware);

export { store, history };
