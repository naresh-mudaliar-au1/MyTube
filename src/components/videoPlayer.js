import React from 'react';
import {connect} from 'react-redux';

import {store, stateMapper} from '../store/store.js';

class videoPlayerComponent extends React.Component{
    render(){
        return(
          <div className="col-md-12">
              <br/>
              <br/>
              <br/>
              <h2 className="strong">{this.props.match.params.videoId}</h2>
              <div className="embed-responsive embed-responsive-16by9" >
                  <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}`} frameBorder="0" allow="accelerometer;
                   autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
         </div>
        )
    }
}

let videoPlayer = connect(stateMapper)(videoPlayerComponent);

export default videoPlayer;
