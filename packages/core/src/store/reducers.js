import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import { history } from './store';

export default (asyncReducers = {}) => {
    return combineReducers({
        router: connectRouter(history),
        ...asyncReducers
    });
}
