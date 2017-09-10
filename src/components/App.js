import React from 'react';
import { Link} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import TitleSpace from './title-bar/TitleSpace';
import FlsahMessageList from './flash/FlsahMessageList';
require('../css/app-layout.css');

class App extends React.Component{
render(){
    return(
        <div className="main-lay">
                 <div className="nav-bar-holder">
                    <TitleSpace/>
                </div>
                <div className="nav-bar-all">
                    <NavigationBar/>  
                </div>
                <div className="child-container">
                    <div>
                        <FlsahMessageList/>
                        {this.props.children}
                    </div>
                    </div>
                </div>
    );
}
}
export default App;