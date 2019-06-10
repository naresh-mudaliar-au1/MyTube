import {store} from '../store.js'
import {fetchVideoComments} from '../api/youtube.js'

function playerCommentsReducer (playerComments=[], action){
   
    if(action.type == "FETCH_VIDEO_COMMENTS" ){
        fetchVideoComments(store, action)
        console.log(action)
    }
 
    if(action.type == "VIDEO_COMMENTS_LOADED"){
        return (action.comments);
    }
    return playerComments;
}

export default playerCommentsReducer;