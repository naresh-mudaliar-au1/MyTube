// //console.log ("hello");

// import {store} from './store/store.js';

// store.subscribe(function(){
//     console.log(store.getState());
// })

// store.dispatch ({
//     type: "FETCH_VIDEOS",
//     videoType: "trending"
// })

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js'

ReactDOM.render (<App/>, document.getElementById('root'));