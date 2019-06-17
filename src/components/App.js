import React from 'react';
import {Provider} from 'react-redux';
import MenuComponent from './menu.js'
import Search from './search.js'
import Trending from './trending.js'
import videoPlayer from './videoPlayer.js'
import Profile from './profile.js'
import createPlaylist from './createPlaylist.js'
import logout from './logout.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {store} from '../store/store.js'
//import videoReducer from '../store/reducers/videosReducer.js';

class App extends React.Component{
    render(){
        return(
         <Router>
             <Provider store={store}>
                 <div className="container">
                     <div className="row">
                         <div className="col-md-3">
                               <MenuComponent />
                          </div>
                          <div className="container-fluid col-md-9">
                              <br/>
                              <Route exact path="/app" component={Trending}/>
                              <Route path="/app/search" component = {Search}/>
                              <Route path="/app/profile" component = {Profile}/>
                              <Route path="/app/logout" component = {logout}/>
                              <Route path="/app/playlists/create" component = {createPlaylist}/>
                              <Route path="/app/player/:videoId" component = {videoPlayer}/>
                          </div>  
                      </div>
                 </div>
              </Provider>
         </Router>
        );
    }
}

export default App; 