import React from 'react';
import {connect} from 'react-redux';

import Videos from './videos.js'
import {stateMapper} from '../store/store.js'

class SearchComponent extends React.Component{
    
    constructor(props) {
        super(props);
         
        this.inputChanged = this.inputChanged.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }
 
    componentWillUnmount(){
        this.props.dispatch({
            type : "CLEAR_VIDEOS"
        });
    }

    inputChanged(event) {
        this.setState({
            query: event.target.value
        });
    }

    buttonClicked() {
        this.props.dispatch({
            type:"FETCH_VIDEOS",
            videoType:"Search",
            query: this.state.query
        })
    }
    render(){
        return(
          <div>
              <div className = "column">
                  <div className="btn-group container-fluid ">
                        <br/>
                        <input onChange={this.inputChanged} className="form-control form-control-md" type="text" placeholder="Search MyTube"></input>
                        <button onClick={this.buttonClicked} type="button" className="btn btn-secondary btn-md"><i className="material-icons" style={{fontSize : 18}}>search</i></button>
                        <br/>
                  </div>
                  <hr/>
                  <Videos/>
             </div>
         </div>
        )
    }
}

let Search = connect(stateMapper)(SearchComponent);
export default Search; 