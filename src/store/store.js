import {createStore, combineReducers} from 'redux';

import videosReducer from './reducers/videosReducer.js';

let reducer = combineReducers({
    videos : videosReducer
});

let store = createStore (reducer);

store.subscribe(()=>{
    console.log(store.getState());
});

function stateMapper (state){
    return state;
}

export {store, stateMapper};