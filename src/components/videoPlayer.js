import React from 'react';
import {connect} from 'react-redux';

import {stateMapper} from '../store/store.js';
import Comments from './comments.js'

class videoPlayerComponent extends React.Component{

    constructor(props){
        super(props);
 
        this.state = {
            showMoreClicked : false,
        }

        this.showMoreClicked = this.showMoreClicked.bind(this);
    }

    componentWillUnmount(){
        this.props.dispatch({
            type : "CLEAR_VIDEO_DATA"
        });
    }

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_VIDEO_DATA",
            videoId : this.props.match.params.videoId
        })
    }

    renderTitle(){
        if(!this.props.currentPlayerVideo.snippet){
            return "Loading..";
         }else{
            return this.props.currentPlayerVideo.snippet.title;
         }
    }

    showMoreClicked(){
        this.setState({
            showMoreClicked:true
        })
    }

    renderDescription(){
    if(this.state.showMoreClicked){
        return(
            <p>
                {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.description}
            </p>
        )
    }else{
        return(
            <p>
                {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.shortDescription}
                <button onClick= {this.showMoreClicked} className="btn btn-secondary btn-sm">Read More</button>
            </p>
        )
    }

}   
   
    render(){
        return(
          <div>
              <div className="col-md-12">
                    <h2 className="strong">{this.renderTitle()}</h2>
                    <hr/>
                  <br/>                  
                  <div className="embed-responsive embed-responsive-16by9" >
                        <iframe title = "player" width="560" height="315" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}`} frameBorder="0" allow="accelerometer;
                        autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                 </div>
             </div>
             <div className=""> 
                 <div className ="col-sm-4">
                      <i className="material-icons" style={{fontSize : 25}}>visibility</i>{this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.statistics.viewCount}
                      <i className="material-icons" style={{fontSize : 25}}>thumb_up</i>{this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.statistics.likeCount}
                      <i className="material-icons" style={{fontSize : 25}}>thumb_down</i>{this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.statistics.dislikeCount}
                 </div>
                  <hr/>
                      Description : {this.renderDescription()}
                  <hr/>
                  <h2>Comments : {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.statistics.commentCount}</h2>
                  <hr/>
                   <Comments videoId={this.props.match.params.videoId}/>
              </div>
          </div>
        )
    }
}

let videoPlayer = connect(stateMapper)(videoPlayerComponent);

export default videoPlayer;
