import{fetchOneVideo} from "../api/youtube.js"
import {store} from "../store.js"

function currentPlayerVideoReducer(currentPlayerVideo = {}, action){
   
    if(action.type == "FETCH_VIDEO_DATA"){
        fetchOneVideo(store, action);
    }

    if(action.type == "VIDEO_DATA_LOADED"){
       let newAction = action.videoData;
       newAction.snippet.shortDescription=action.videoData.snippet.description.slice(0, 500);
       return newAction;
    }

    if(action.type == "CLEAR_VIDEO_DATA"){
        return {};
    }

    return currentPlayerVideo;
}

export default currentPlayerVideoReducer;