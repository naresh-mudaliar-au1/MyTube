import React from 'react';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store.js'
import {Link} from 'react-router-dom';

class MenuComponent extends React.Component{
    
    componentDidMount(){
        this.props.dispatch({
            type : "FECTH_PLAYLISTS",
        })
    }

    render(){
        return(
            <div className="list-group">
                <br/>
               <h1>MyTube</h1>
               <hr/>
                 <li className="list-group-item list-group-item-action active bg-dark">Menu</li>
                 <Link to="/app" className="list-group-item list-group-item-action">Trending</Link>
                 <Link to="/app/search" className="list-group-item list-group-item-action">Search</Link>
                 <li className="list-group-item active bg-dark">My Playlists</li>
                 {
                     this.props.playlists && this.props.playlists.map(p=>{
                         return(
                             <li key={p.etag} className="list-group-item list-group-item-action">
                                 <Link to={`/app/playlist/${p.id}`}>{p.snippet.title}</Link>
                             </li>
                         )
                     })
                 }
                  <Link to={'/app/playlists/create'} className="list-group-item list-group-item-action" >
                  Create <i className="material-icons" style={{fontSize : 25}}>playlist_add</i> </Link>
                 <li className="list-group-item active bg-dark">my Account</li>
                 <Link to="/app/profile" className="list-group-item list-group-item-action">Profile</Link>
                 <Link to="/app/logout" className="list-group-item list-group-item-action">Logout</Link>           
              </div>
        )
    }
}

let Menu = connect (stateMapper)(MenuComponent)
export default Menu;