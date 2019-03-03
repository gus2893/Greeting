import {combineReducers } from 'redux';
import AuthStatusReducer from './AuthStatusReducer';

export default combineReducers({
    userInfo : AuthStatusReducer
})