import {createStore, combineReducers} from 'redux';

import videosReducer from './reducers/videosReducer.js';
import isVideosLoadingReducer from './reducers/isVideosLoading.js';
import currentPlayerVideoReducer from './reducers/currentPlayerVideoReducer.js';
import playerCommentsReducer from './reducers/playerComments.js'


let reducer = combineReducers({
    videos : videosReducer,
    isVideosLoading : isVideosLoadingReducer,
    currentPlayerVideo: currentPlayerVideoReducer,
    playerComments : playerCommentsReducer
});

let store = createStore (reducer);

store.subscribe(() => { 
    console.log(store.getState());
});

function stateMapper (state){
    return state;
}

export {store, stateMapper};