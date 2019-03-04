import {combineReducers } from 'redux';
import AuthStatusReducer from './AuthStatusReducer';
import {reducer as formReducer} from 'redux-form';
export default combineReducers({
    userInfo : AuthStatusReducer,
    form: formReducer
})