import React from 'react';
import {GoogleLogin} from 'react-google-login';

class Login extends React.Component{
   constructor(props){
       super(props);

       this.googleResponse= this.googleResponse.bind(this);
   }

    googleResponse(response){
       if(!response || !response.accessToken){
           alert("sorry, SignIn to Google failed")
           return;
       }
       let user = {
           token: response.accessToken,
           name: response.profileObj.name
        };
        localStorage.setItem("user", JSON.stringify(user));

        this.props.history.push("/app");
    }

    render(){
        return(
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-4 offset-md-5">
                      <h2> Google Login </h2>
                        <GoogleLogin
                        clientId="823410217069-baub9akhcbkoj1qqrifc293s5jkv6mdl.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                        scope="https://www.googleapis.com/auth/youtube"
                        />
                  </div>
             </div>
         </div>
        )
    }
}

export default Login