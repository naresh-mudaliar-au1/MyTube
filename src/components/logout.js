import React from 'react';
import {Redirect} from 'react-router-dom';

class logout extends React.Component{
    
    render(){
   
        localStorage.removeItem("user");

        return(
         <div className= "container-fluid">
             <h2>Logging Out</h2>
             <hr/>
             <Redirect to="/login"/>
        </div>
        )
    }
}

export default logout;