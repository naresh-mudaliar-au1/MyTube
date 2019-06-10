import MYTUBE_CONFIG from "../config.js"
//import store from "../store.js" 

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

export {fetchVideos, fetchOneVideo}
