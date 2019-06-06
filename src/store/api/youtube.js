import MYTUBE_CONFIG from "../config.js" 

function fetchVideos (store, action){
    
    if(action.videoType == "Trending"){
      let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&maxResults=20`
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
        let url = `https://www.googleapis.com/youtube/v3/search?key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&q=${action.query}&part=snippet&maxResults=20`
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
}
export {fetchVideos};
