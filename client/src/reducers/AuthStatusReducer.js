import {CHECK_AUTH, SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case SIGN_IN:
            return {...state,isSignedIn: true, userId: action.payload.userId};
        case SIGN_OUT:
            return {...state,isSignedIn: false, userId: null};
        case CHECK_AUTH:
            return {...state,isSignedIn: action.payload.isSignedIn, userId: action.payload.userId};
        default:
            return state;
    }
}