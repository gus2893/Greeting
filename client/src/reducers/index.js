import {combineReducers } from 'redux';
import AuthStatusReducer from './AuthStatusReducer';
import {reducer as formReducer} from 'redux-form';
import streamReducer from './streamReducer';


export default combineReducers({
    userInfo : AuthStatusReducer,
    form: formReducer,
    streams: streamReducer
})