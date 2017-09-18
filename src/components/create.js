import React, { Component } from 'react'
import { connect }from 'react-redux'
import{SAVE_DATA} from '../action/tableAction'
import {bindActionCreators} from 'redux'
import classnames from 'classnames'
import { ref} from '../config/firebase'
class Create extends Component {
    constructor(props){
        super(props);
        this.state={
            value:'',
            time:[],
            subject:'',
            weight:0,
            error:{},
            data:[],
        }
        this.textOnchange =this.textOnchange.bind(this);
        this.handlerTile =this.handlerTile.bind(this);
        this.Onclick =this.Onclick.bind(this);
        this.onselect =this.onselect.bind(this);
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
}
handleChange=(e)=>{
    if (!!this.state.error[e.target.name]) {
      let error = Object.assign({}, this.state.error);
      delete error[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        error
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  } 
onselect(event){
    this.setState({weight: event.target.value})
}
Onclick(event){
    event.preventDefault();
       let data = this.state.value
       let log = data.split('\n')
       for(let i=0;i<log.length;i++){
           if(log[i].length>0){
               this.state.time.push(log[i])
           }
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
    textOnchange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        let error={};
        if(this.state.time==='')error.user = "Don't have data";
        if(this.state.subject==='')error.user = "Don't have data";
        this.setState({error});
       // alert("EROOR")
         const inVali  = Object.keys(error).length===0
        if(inVali){
            //save data
            this.props.SAVE(this.state.time,{title:this.state.subject,weight:this.state.weight});
            this.setState({time:' ',subject:' '});
            const data ={
                 title:this.state.subject,
                 weight:this.state.weight,
                 time:this.state.time,
            }
            //save data to firebase 
            ref.child(`table`)
            .push({
                title:data.title,
                weight:data.weight,
                time:data.time
            }).then(()=>{
                //alert("Save data");
            });       

        }else{
            //alert("EROO")}
      }
     // const doubled = this.props.time.map((number) => number * 2);
     // console.log(doubled);
      //console.log(this.props.time);
    }

    render() {
        return (
            <div>
                <div className="field is-grouped " >
                 <p className={classnames('control is-expanded',{error:!!this.state.error.user})}>
                    <input className="input" type="text" placeholder="รายชื่อวิชา" onChange={this.handleChange}
                     value={this.state.subject}
                     name='subject'
                    />
                    {this.state.error.user}
                </p>
                <p className="control">
                    <span className="select">
                    <select
                     value={this.state.weight} 
                     onChange={this.onselect}
                    >
                        <option>หน่วยกิต</option>
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
                    <textarea className={classnames('textarea is-small',{error:!!this.state.error.user})} placeholder="Tu10:00-11:00" rows="1" onChange={this.handleChange} 
                     name='time'
                     value={this.state.time}
                    />
                </p>
                <p className="control">
                    <p type="submit" value='Save' className="button is-info" onClick={this.handleSubmit}>SAVE</p>
                </p>
                <p>
                
                </p>
            </div>
            <li>วิชา: {this.props.title} จำนวนหน่วยกิต: {this.props.weight} เรียนเวลา: {this.props.time}</li>
        </div>
        )
    }
}
const mapStateToProp=(state)=>{
    return{
       title:state.Table.title,
       weight:state.Table.weight,
       time:state.Table.table.time
    }
}
const mapDispatchToProp=(dispatct)=>{
  return {
      SAVE:bindActionCreators(SAVE_DATA,dispatct),
    }
  }
export default  connect(mapStateToProp,mapDispatchToProp)(Create);