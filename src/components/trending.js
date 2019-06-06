import React from 'react';
import {connect} from 'react-redux';
import { store, stateMapper } from '../store/store'
import Videos from './videos.js'

class TrendingComponent extends React.Component{

    componentDidMount(){
        store.dispatch({
           type : "FETCH_VIDEOS",
           videoType: "Trending"
        })
    }
   
    render(){
        return(
            <div >
                <h1>Trending</h1>
                <hr/>
                <Videos/>
          </div>
        )
    }
}

let Trending = connect(stateMapper)(TrendingComponent);

export default Trending; 