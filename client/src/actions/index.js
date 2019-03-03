import {CHECK_AUTH, SIGN_IN, SIGN_OUT} from './types';

export const trySignIn = () => async dispatch => {
    await window.gapi.load('client:auth2', ()=> {
        window.gapi.client.init({
            clientId: '485197595118-pph7brngg39s0fd3qeluh1bvufnr7pne.apps.googleusercontent.com',
            scope: 'email'
        }).then(()=>{
            window.gapi.auth2.getAuthInstance().signIn();
            dispatch({
                type: SIGN_IN, 
                payload: {
                   isSignedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get(),
                   userId: window.gapi.auth2.getAuthInstance().currentUser.get().getId()
                 }
            });
        })
    });

 }

export const trySignOut = () => async dispatch =>{
    await window.gapi.load('client:auth2', ()=> {
        window.gapi.client.init({
            clientId: '485197595118-pph7brngg39s0fd3qeluh1bvufnr7pne.apps.googleusercontent.com',
            scope: 'email'
        }).then(()=>{
            window.gapi.auth2.getAuthInstance().signOut();
            dispatch({
                type: SIGN_OUT
            });
        })
    });

 }

 export const checkAuth = () => async dispatch =>{
    await window.gapi.load('client:auth2', ()=> {
        window.gapi.client.init({
            clientId: '485197595118-pph7brngg39s0fd3qeluh1bvufnr7pne.apps.googleusercontent.com',
            scope: 'email'
        }).then(()=>{
            dispatch({
                type: CHECK_AUTH, 
                payload: {
                   isSignedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get(),
                   userId: window.gapi.auth2.getAuthInstance().currentUser.get().getId()
                 }
            });
        })
    });

 }

