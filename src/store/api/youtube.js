import MYTUBE_CONFIG from "../config.js"
import { useReducer } from "react";
import { get } from "https";
//import store from "../store.js" 

function getUserToken (){
    let user = localStorage.getItem("user");

    if(!user) {return null; }

    user = JSON.parse(user);

    return user.token;
}

function fetchVideos (store, action){
    
    if(action.videoType == "Trending"){
      let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&maxResults=5`
     fetch (url)
     .then(function (data){
          return data.json()
      })
      .then(function (response){
          store.dispatch({
              type:"VIDEOS_LOADED",
              videos : response.items
          })
        //console.log(response);
      })
      .catch(function(err){
          console.log("fetch error", err);
      })

    }
    
    else if(action.videoType == "Search"){
        let url = `https://www.googleapis.com/youtube/v3/search?key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&q=${action.query}&part=snippet&maxResults=5`
        fetch (url)
        .then(function (data){
             return data.json()
         })
         .then(function (response){
             store.dispatch({
                 type:"VIDEOS_LOADED",
                 videos : response.items
             })
           //console.log(response);
         })
         .catch(function(err){
             console.log("fetch error", err);
         })
    }
};

function fetchOneVideo (store, action){
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${action.videoId}&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`

    fetch(url)
      .then(function(response){
          return response.json();
      })
      .then(function(data){
          store.dispatch({
              type:"VIDEO_DATA_LOADED",
              videoData: data.items[0]
          })
      })
      .catch (function(err){
          console.log("fetch error", err)
      })
}

function fetchVideoComments (store, action){
    let url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies
    &videoId=${action.videoId}&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`

    fetch(url)
      .then(function(response){
          return response.json();
      })
      .then(function(data){
          store.dispatch({
              type:"VIDEO_COMMENTS_LOADED",
              comments : data.items
          })
      })
      .catch (function(err){
          console.log("fetch error", err)
      })
}

function fetchPlaylists (store, action){
    let url = "https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResult=10";

    let token = getUserToken();

    if(!token) {return store};
    
    fetch(url, {
        "headers": {
            "Authorization" : `Bearer ${token}`
        } 
     })
    
      .then(function(response){
          return response.json();
      })
      .then(function(data){
          store.dispatch({
              type:"PLAYLISTS_LOADED",
              playlist : data.items
          })
      })
      .catch (function(err){
          console.log("fetch error", err)
      })
}

function createPlaylist (store, action){
    let url = "https://www.googleapis.com/youtube/v3/playlists?part=snippet";

    let formData = {
        "snippet":{
            "title" : action.formData.name,
            "description": action.formData.description
        }
    };

    let token = getUserToken();

    if(!token) {return store; }
   
    fetch(url, {
        "method":"POST",
       "headers": {
            "Authorization" : `Bearer ${token}`,
           "content-type" : "application/json"
       } ,
        "body": JSON.stringify(formData)
    })

      .then(function(response){
          console.log(response)
          return response.json();
      })
      .then(function(data){
          console.log(data)
          store.dispatch({
              type:"PLAYLIST_CREATED",
              newPlaylist : data
          })
      })
      .catch (function(err){
          console.log("fetch error", err)
      })
}
export {fetchVideos,
       fetchOneVideo, 
       fetchVideoComments,
       fetchPlaylists,
       createPlaylist
    }

    
 
  