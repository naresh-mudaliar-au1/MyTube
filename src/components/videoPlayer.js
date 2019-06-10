import React from 'react';
import {connect} from 'react-redux';

import {store, stateMapper} from '../store/store.js';

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

    //  kformat(num){
    //     if(num > 999){
    //       num=num.toString()
    //       return (num[0]+"k");
    //     }
    //   }

    renderDescription(){
    //     if(!this.props.currentPlayerVideo.snippet){
    //         return null
    //     }else{
    //         let description = this.props.currentPlayerVideo.snippet.description
    //        if(description.length > 100){
    //           return(
    //             <div>
    //             `${description.slice(0, 500)}`
    //             <button className="btn btn-secondary btn-sm">Read More</button>
    //             </div>
    //           );
    //        }else{
    //            return description;
    //        }
    //     }
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
          <div className="col-md-12">
              <h2 className="strong">{this.renderTitle()}</h2>
              <hr/>
              <br/>
               <div className="embed-responsive embed-responsive-16by9" >
                  <iframe title = "player" width="560" height="315" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}`} frameBorder="0" allow="accelerometer;
                   autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <h2 className="strong">{this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.statistics.viewCount}</h2>
              <p className="strong">{this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.statistics.likeCount}</p>
              <p className="strong">{this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.statistics.dislikeCount}</p>
              <hr/>
              Description : {this.renderDescription()}
         </div>
        )
    }
}

let videoPlayer = connect(stateMapper)(videoPlayerComponent);

export default videoPlayer;
