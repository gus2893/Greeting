import streams from '../api/streams';
import history from '../history';
import {
    CHECK_AUTH, 
    SIGN_IN, SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM 
} from './types';

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


 export const createStream = formProps => async (dispatch, getState) =>{
    const {userId} = getState().userInfo;
    const response = await streams.post('/streams', {...formProps, userId});
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
    history.push('/');
 }

 export const fetchStreams = () => async dispatch =>{
    const response = await streams.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })

 }

 export const fetchStream = id => async dispatch =>{
     const response = await streams.get(`/streams/${id}`);
     dispatch({
         type:FETCH_STREAM,
         payload: response.data
     })
 }

 export const editStream = (id, formProps) => async dispatch => {
     const response = await streams.put(`/streams/${id}`, formProps);
     dispatch({
         type: EDIT_STREAM,
         payload: response.data
     })
 }

 export const deleteStreams = id => async dispatch =>{
     await streams.delete(`/streans/${id}`);
     dispatch({
         type: DELETE_STREAM,
         payload: id
     })
 }