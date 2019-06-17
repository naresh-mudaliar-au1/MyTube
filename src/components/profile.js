import React from 'react';

class Profile extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            name: ""
        }
    }

    componentDidMount(){
        let user = localStorage.getItem("user");
       
        user = JSON.parse(user);

        this.setState({
            name : user.name
        })
    }

    
    render(){
        return(
         <div className= "container">
             <h2>MyProfile</h2>
             <hr/>
             hi <strong>{this.state.name}</strong>
        </div>
        )
    }
}

export default Profile;