//Now create your store by import createStore from redux which creates your store, since not responsible to connecting to react.
//and combineReducer to combine reducers
import { createStore, combineReducers } from 'redux';
//import your userReducer
import userReducer from './reducers/userReducer';

let reducer = combineReducers({ user: userReducer});
//export yuor store with redux devtools
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());