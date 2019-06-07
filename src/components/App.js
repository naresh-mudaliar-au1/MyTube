import React from 'react';
import {Provider} from 'react-redux';
import MenuComponent from './menu.js'
import Search from './search.js'
import Trending from './trending.js'
import videoPlayer from './videoPlayer.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {store} from '../store/store.js'
//import videoReducer from '../store/reducers/videosReducer.js';

class App extends React.Component{
    render(){
        return(
      <Provider store={store}>
         <Router>
             <div className="container">
                  <div className="row">
                      <div className="col-md-3">
                         <MenuComponent />
                      </div>
                       <div className="col-md-9">
                          <br/>
                           <Route exact path="/" component={Trending}/>
                           <Route path="/search" component = {Search}/>
                           <Route path="/player/:videoId" component = {videoPlayer}/>
                       </div>  
                  </div>
             </div>
         </Router>
      </Provider>
        );
    }
}

export default App; 