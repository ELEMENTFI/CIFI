import {applyMiddleware, createStore} from "redux"
import allReducers from './reducers';
import thunk from "redux-thunk";

const store = createStore(allReducers,
    applyMiddleware(thunk));

export default store;