import {store} from '../store.js'
import {fetchPlaylists} from '../api/youtube.js'

function playlistsReducer (playlist=[], action){
   
    if (action.type == "FETCH_PLAYLISTS"){
        fetchPlaylists(store, action);
    }

    if (action.type == "PLAYLIST_CREATED"){
        fetchPlaylists(store, action);
    }

    if(action.type == "PLAYLISTS_LOADED"){
        return action.playlist
    }
      
    return playlist;
}

export default playlistsReducer;