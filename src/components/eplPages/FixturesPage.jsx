import React from 'react';
import {connect} from 'react-redux';
import {getFixtures} from '../actions/getFixtures.js';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
var classnames = require('classnames');
const parseJson = require('parse-json');
require('../../css/fixture-page.css');
class FixturesPage extends React.Component{
constructor(props)
    {
       
		super(props);
		this.state ={
	todos:[],
    errors:{},
    club_name_data:[],
      fixt:[],
      matches:[],
      matchDay:0,
      matchDayArray:{},
      element_round:'',
      newData:[],
      hideData:'',
      element_fix: 'element-club-fix',
      element_valu:1,

    }
    this.onPrev= this.onPrev.bind(this);
    this.onNext= this.onNext.bind(this);
    this.onListClick= this.onListClick.bind(this);
  }

  onPrev(e)
  {
      
    e.preventDefault();
    if(this.state.matchDay>-0)
    {
    this.setState({machDay:this.state.matchDay--});
    console.log("-"+this.state.matchDay);
    this.setState({element_round:this.state.matches[this.state.matchDay].name});
    }
  }
  
  onNext(e)
  {
    e.preventDefault(); 
    if(this.state.matchDay<37)
    { 
        this.setState({machDay:this.state.matchDay++}); 
        this.setState({element_round:this.state.matches[this.state.matchDay].name});

    }
  }

  onListClick(e){
      console.log(this.state.hideData);
      this.setState({hideData:e.team1.key});
      console.log(this.state.hideData);
      
  }
  componentWillMount(){


  }
  componentDidMount(){
        getFixtures(this.state.errors).then((response)=>{
        this.setState({fixt:response.data.usr});
        this.setState({matches:this.state.fixt.datas[0].rounds});
        this.setState({matchDay:0});
        this.setState({element_round:this.state.matches[this.state.matchDay].name});
        
    });
    
  }
  
  shouldComponentUpdate(nextProps, nextState){
    if(this.state.element_round!==nextState.element_round){
        return true;
    }
    if(this.state.hideData!==nextState.hideData){
        return true;
    }
    return false;

 }
 render(){
     var dataNew = [];
     var travData = (this.state.matches);
     var travData2 = travData[this.state.matchDay];
     for(const x in travData2){
         if(x==='matches')
         {
              var dataNew = travData2[x];
            
         }
        
        
     } 
     const displayAll = dataNew.map(name=> {
          return(
          <div className={this.state.element_fix} value ={name} onClick={() => this.onListClick(name)}>
           <li className ="fix-list-li" key ={name.team1.key} id={name} value ={name} >
           <span className="fix-list-date">{name.date}</span> 
           <span className="fix-list-data">
               {name.team1.name} vs {name.team2.name}</span>
          </li>
             {this.state.hideData===name.team1.key && <div>
                 {name.score1} : {name.score2}
              </div>}
         </div>
          );
      });
     return(

          <div className="row">
              <div >
                 <ul className="fix-nav">
                     <li><a className="change" onClick ={this.onPrev} href="#"><span className="glyphicon glyphicon-menu-left"></span></a></li>
                     <li><a href="#">{this.state.element_round}</a></li>
                     <li><a className="change" onClick ={this.onNext} href="#"><span className="glyphicon glyphicon-menu-right"></span></a></li>
                 </ul>
              </div>
              <div>
                  {displayAll}
              </div>
          </div>
      );
 }
}
FixturesPage.propTypes ={
}

export default FixturesPage;