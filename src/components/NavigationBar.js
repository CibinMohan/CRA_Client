import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from './actions/login'
require('../css/link-css.css');
class NavigationBar extends React.Component{
    logout(e){
        e.preventDefault();
        this.props.logout();
    }
    render(){
     const {isAuthenticated}  = this.props.auth; 
     const userLink =
            (<ul className="nav navbar-nav navbar-right">
                <li><a href ="#" onClick={this.logout.bind(this)}><span className="glyphicon glyphicon-log-out"></span> Logout</a>
                </li>
                </ul>
     
     );
     const gustLink =(
            <ul className="nav navbar-nav navbar-right">
                <li>
                <Link to = "signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                <li><Link to = "login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
     );
    return( 
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    {/*<div className="navbar-header">
                    <a className="navbar-brand" href="#">Styx Football</a>
                    </div>*/}
                    <ul className="nav navbar-nav">
                    <li ><Link to = "home">Home</Link></li>
                    <li ><Link to = "greet">League</Link></li>
                    <li><Link to = "fixtures">Fixtures</Link></li>
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