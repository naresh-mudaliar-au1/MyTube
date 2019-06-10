import {createStore, combineReducers} from 'redux';

import videosReducer from './reducers/videosReducer.js';
import isVideosLoadingReducer from './reducers/isVideosLoading.js';
import currentPlayerVideoReducer from './reducers/currentPlayerVideoReducer.js';


let reducer = combineReducers({
    videos : videosReducer,
    isVideosLoading : isVideosLoadingReducer,
    currentPlayerVideo: currentPlayerVideoReducer
});

let store = createStore (reducer);

store.subscribe(()=>{
    console.log(store.getState());
});

function stateMapper (state){
    return state;
}

export {store, stateMapper};