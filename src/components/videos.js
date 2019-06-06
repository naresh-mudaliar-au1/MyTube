import React from 'react';
import {connect} from 'react-redux';
import { stateMapper } from '../store/store';

class VideosComponent extends React.Component{
   
    renderVideos(){
        return(
            this.props.videos.map(v=>{
                return (
                  <div key={v.id} className="col-md-4">
                      <img className="img-fluid" src={v.snippet.thumbnails.high.url} alt="" />
                      <div className="media-body">
                         <h6>{v.snippet.title}</h6>
                          <div className="text-muted">{v.snippet.channelTitle}</div>
                       </div>
                  </div>
                )
            })    
        )
    }

    render(){
        return(
            <div className="row">
               {this.renderVideos()}
            </div>
        )
    }
}

let Videos = connect (stateMapper)(VideosComponent);

export default Videos;