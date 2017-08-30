import React, { Component } from 'react'
import { connect }from 'react-redux'
import{SAVE_DATA} from '../action/tableAction'
import {bindActionCreators} from 'redux'
class Create extends Component {
    constructor(){
        super();
        this.state={
            value:'',
            time:[],
            subject:'',
            weight:0,
        }
        this.textOnchange =this.textOnchange.bind(this);
        this.handlerTile =this.handlerTile.bind(this);
        this.Onclick =this.Onclick.bind(this);
        this.onselect =this.onselect.bind(this);
}
onselect(event){
    this.setState({weight: event.target.value})
}
    Onclick(){
       //console.log(this.state.value);
       //alert("Hello")
       let data = this.state.value
       let log = data.split('\n')
       //let log2 = log[0].split(' ');
       //let log3 = log[1].split(' ');
       //console.log(log.length);
       for(let i=0;i<log.length;i++){
           if(log[i].length>0){
               this.state.time.push(log[i])
           }
           //console.log(log[i]);
           //log[]
       }
       
    this.props.SAVE(this.state.time,{title:this.state.subject,weight:this.state.weight});
       // this.state.time.push(log2[0]);
       //this.state.time.push(log3[0])
       //console.log(log);
       //console.log(log3)
       //console.log(this.state.time)
       //console.log(this.state.subject)
       //console.log(this.state.weight)
    }
    handlerTile(event){
        this.setState({subject: event.target.value});
       // this.props.SAVE("keng");
    }
    textOnchange(event){
        this.setState({value: event.target.value});
    }
    render() {
        return (
                <div className="field is-grouped " >
                 <p className="control is-expanded">
                    <input className="input" type="text" placeholder="รายชื่อวิชา" onChange={this.handlerTile}/>
                </p>
                <p className="control">
                    <span className="select">
                    <select
                     value={this.state.weight} 
                     onChange={this.onselect}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                     </span>
                </p>
                <p className="control">
                    <textarea className="textarea is-small" placeholder="Tu10:00-11:00" rows="1" onChange={this.textOnchange}/>
                </p>
                <p className="control">
                    <p type="submit" value='Save' className="button is-info" onClick={this.Onclick}>SAVE</p>
                </p>
            </div>
        )
    }
}
const mapStateToProp=(state)=>{
    return{
       time:state.Table.time
    }
}
const mapDispatchToProp=(dispatct)=>{
  return {
      SAVE:bindActionCreators(SAVE_DATA,dispatct),
    }
  }
export default  connect(mapStateToProp,mapDispatchToProp)(Create);