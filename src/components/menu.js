import React from 'react';
import {Link} from 'react-router-dom';

class MenuComponent extends React.Component{
    render(){
        return(
            <div className="list-group">
               <h1>MyTube</h1>
               <hr/>
               <br/>
               <br/>
                 <Link to="" className="list-group-item list-group-item-action active bg-dark">Menu</Link>
                 <Link to="/" className="list-group-item list-group-item-action">Trending</Link>
                 <Link to="/Search" className="list-group-item list-group-item-action">Search</Link>
              </div>
        )
    }
}

export default MenuComponent;