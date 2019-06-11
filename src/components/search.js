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

          <div className="container">
                <div className = "row">
                    <div className = "col-md-9">
                        
                      <div className="btn-group container-fluid">
                            <br/>
                            <input onChange={this.inputChanged} className="form-control form-control-lg" type="text" placeholder="Search MyTube"></input>
                            <button onClick={this.buttonClicked} type="button" className="btn btn-secondary"><i className="material-icons" style={{fontSize : 25}}>search</i></button>
                            <hr/>
                     </div>
                     <hr/>
                     <Videos/>
                  </div>
              </div>
         </div>

        )
    }
}

let Search = connect(stateMapper)(SearchComponent);
export default Search; 