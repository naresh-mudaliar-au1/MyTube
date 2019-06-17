import React from 'react';
import {connect} from 'react-redux';
import { stateMapper } from '../store/store';
import {Link} from 'react-router-dom';

class VideosComponent extends React.Component{
   
    renderVideos(){
        return(
            this.props.videos.map(v=>{

                let videoId = v.id;
                
                if(typeof videoId != "string"){
                    videoId = v.id.videoId
                }

                return (
                  <div key={v.etag} className="col-md-4">
                      <Link to={`/app/player/${videoId}`}>
                            <img className="img-fluid" src={v.snippet.thumbnails.high.url} alt="" />
                           <h6>{v.snippet.title}</h6>
                     </Link>
                         <div className="text-muted">{v.snippet.channelTitle}</div>
                  </div>
                )
            })    
        )
    }

    render(){
        if(this.props.isVideosLoading){
            return(
             <div className="row">
                  <div className="col-md-12">
                      <div className="d-flex align-items-center">
                          <strong>Hold On...Your Internet is Slow</strong>
                          <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                      </div>
                 </div>
             </div>
             );
        }else{
        return(
            <div className="row">
               {this.renderVideos()}
            </div>
        )
    }
  }
}

let Videos = connect (stateMapper)(VideosComponent);

export default Videos;