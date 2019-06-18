import {createStore, combineReducers} from 'redux';

import videosReducer from './reducers/videosReducer.js';
import isVideosLoadingReducer from './reducers/isVideosLoading.js';
import currentPlayerVideoReducer from './reducers/currentPlayerVideoReducer.js';
import playerCommentsReducer from './reducers/playerComments.js';
import playlistsReducer from './reducers/playlistreducer.js';
import newPlaylistReducer from './reducers/newPlayListReducer.js';


let reducer = combineReducers({
    videos : videosReducer,
    isVideosLoading : isVideosLoadingReducer,
    currentPlayerVideo: currentPlayerVideoReducer,
    playerComments : playerCommentsReducer,
    playlists: playlistsReducer,
    newPlaylists : newPlaylistReducer
});

let store = createStore (reducer);

store.subscribe(() => { 
    console.log(store.getState());
});

store.dispatch({
    type:"FETCH_PLAYLISTS"
})

function stateMapper (state){
    return state;
}

export {store, stateMapper};