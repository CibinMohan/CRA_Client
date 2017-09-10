import React from 'react';
require('../../css/title-space.css');
class TitleSpace extends React.Component{
render(){
    return(
        <div className="title-space">
            <div className = "container">
                <label id= "site-name">StyxFootball</label>
            </div>
            <div className = "right-search-bar">
            </div>
        </div>
    );
}
}

TitleSpace.propTypes ={
}

export default TitleSpace;