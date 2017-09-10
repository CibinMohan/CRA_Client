import React from 'react';
import {connect} from 'react-redux';
import {addFlashMessage} from '../actions/flashMessages.js'
import axios from 'axios';
var classnames = require('classnames');
require('../../css/heat_map_fix.css');
class HomePage extends React.Component{
constructor()
    {
		super();
		this.state ={
	  todos:[],
    errors:{},
    club_name_data:[],
    fixt:[],
    data:[{
"name":"ARS",
"fixt": [
{"name": "STK"},
{"name": "LIV"},
{"name": "BOU"},
{"name": "CHE"},
{"name": "WBA"}
]
},{
"name":"CHE",
"fixt": [
{"name": "STK"},
{"name": "ARS"},
{"name": "BOU"},
{"name": "CRY"},
{"name": "WBA"}
]
},{
"name":"MCI",
"fixt": [
{"name": "STK"},
{"name": "LIV"},
{"name": "ARS"},
{"name": "CHE"},
{"name": "WBA"}
]
}]
}
  }
  componentWillMount(){



  }
  componentDidMount(){
    axios.post('/api/clubname', this.state.errors).then((response)=>{
        this.setState({club_name_data:response.data.usr});
      //  console.log(response.data.usr);

         });
  }
render(){
  //  console.log(this.state.data);

    let dataList = this.state.club_name_data.map(name=> {
      for(const x of this.state.data){
        if(name.code===x.name)
        {
            x.fixt.map(cFixt=>{
            return(
              <div className="heat-map">
              {
              this.state.club_name_data.map(cName=> {

                if(cName.code===cFixt.name){
                  <span>{cName.code}</span>;
                }
              })
              }
              </div>
            );
          });



        }
        }
    });
    console.log(dataList);

    let sideList = this.state.club_name_data.map(name=> {
      return(
        <div className="element-club">
          <li key ={name.id} value ={name.id}><span className={classnames('dot-color')} >   </span>{name.name}</li>
        </div>
        );
    });
    return(
        <div className="row">
            <div className = "list-club">
                {sideList}
            </div>
            <div className ="main-data">
              {dataList}
            </div>
        </div>
    );
}
}

HomePage.propTypes ={
}

export default HomePage;
