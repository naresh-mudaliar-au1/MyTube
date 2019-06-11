import React from 'react';
import {connect} from 'react-redux';

import {stateMapper} from '../store/store.js';

class CommentsComponent extends React.Component {

    componentDidMount(){
        this.props.dispatch({
            type: "FETCH_VIDEO_COMMENTS",
            videoId : this.props.videoId
        });
    }

    render(){
        return(
            <div className="panel-body">
                {this.props.playerComments.map(c=> {
                    return <div key={c.etag}>
                        <img src={c.snippet.topLevelComment.snippet.authorProfileImageUrl}alt={""}></img>{" "}
                        <strong>{c.snippet.topLevelComment.snippet.authorDisplayName}</strong>
                        <br/>
                        <br/>
                        <p><u>{c.snippet.topLevelComment.snippet.textOriginal}</u></p>
                        <hr/>
                    </div>
                })}
            </div>
        )
    }
}
let Comments = connect(stateMapper)(CommentsComponent)

export default Comments;