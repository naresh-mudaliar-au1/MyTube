import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import App from './components/App.js'
import Login from './components/login.js'

class HOME extends React.Component{
    
    redirect(){
        let loggedIn = localStorage.getItem("user");

        if(loggedIn){
            return <Redirect to= "/app"/>
        }else{
            return <Redirect to ="/login"/>  
        }
    }

    render(){
      return(
      <Router>
          <div>
             <Route exact path="/app" component={App}/>
             <Route exact path="/login" component={Login}/>
             {this.redirect()}
           </div>
      </Router>
       )
    }
}

ReactDOM.render (<HOME/>, document.getElementById('root'));