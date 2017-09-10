import React from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from './actions/login'
require('../css/app.css');
class NavigationBar extends React.Component{
    logout(e){
        e.preventDefault();
        this.props.logout();
    }
    render(){
     const {isAuthenticated}  = this.props.auth; 
     const userLink =
            (<ul className="menu-bar-right">
                <li className="menu-bar-right"><a href ="#" className ="glyphicon glyphicon-log-out" onClick={this.logout.bind(this)}>Logout</a>
                </li>
                </ul>
     
     );
     const gustLink =(
            <ul >
                <li className="menu-bar-right">
                <Link to = "signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                <li className="menu-bar-right"><Link to = "login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
     );
    return(  
            <nav className="navtrt">
                <div>
                    <div >
                    <a className="navbar-brand" id = "site-name" href="#">Styx Football</a>
                    </div>
                    <ul >
                    <li className="active"><Link className="link-class" to = "greet">Greet</Link></li>
                    <li><Link className="link-class" activeClassName="link-class" to = "greet">Greet</Link></li>
                    </ul>
                    <div className="collapse navbar-collapse">
                        {isAuthenticated ? userLink: gustLink}
                    </div>
                </div>
            </nav>

    );
    }
}
NavigationBar.propType ={
    auth: React.PropTypes.object.isRequired,
    logout:React.PropTypes.func.isRequired
};
function mapStateToProp(state){
    return{
        auth:state.auth
    };
}
export default connect(mapStateToProp,{logout}) (NavigationBar);