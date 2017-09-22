import React, { Component } from 'react'
import { connect }from 'react-redux'
import{SAVE_DATA,GET_DATA} from '../action/tableAction'
import {bindActionCreators} from 'redux'
import classnames from 'classnames'
import { ref,get} from '../config/firebase'
class Create extends Component {
    constructor(){
        super();
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
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
}
handleChange(e){
    if (!!this.state.error.user) {
      let error = Object.assign({}, this.state.error);
      delete error[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        error:''
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
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
        if(this.state.time.length===0||this.state.subject===' '||this.state.weight===' ')error.user = "Don't have data";
        this.setState({error});
       // alert("EROOR")
         const inVali  = Object.keys(error).length === 0
        if(inVali){
            //save data
            console.log(this.state.time)
            this.props.SAVE(this.state.time,{title:this.state.subject,weight:this.state.weight});
            this.setState({time:' ',subject:' ',weight:'หน่วยกิต'});
            const task ={
                 title:this.state.subject,
                 weight:this.state.weight,
                 time:this.state.time,
            }
             let data=[]
             data.push(task);
            this.props.GET(task);
            this.setState({data:this.state.data.concat(data)})
            //save data to firebase 
            ref.child(`table`)
            .push({
                title:task.title,
                weight:task.weight,
                time:task.time,
                checked: false,
            }).then(()=>{
                //alert("Save data");
            });       

        }else{
               //alert("EROO")}
      }
    }
componentDidMount(){  
        get.ref().child('table').once('value',(snapshot)=>{
          let data=[]
          snapshot.forEach(shot => {
            //console.log(shot.val())
             let task={
                   title:shot.val().title,
                   time:shot.val().time,
                   weight:shot.val().weight,
             }
             data.push(task);
          });
          this.setState({data});
          this.props.GET(data);
        });
      }
    render() {
        //test rander inster 
        const listItems = this.state.data.map((d, idx) =>
          <li key={idx}>{d.title}</li>
        );
        return (
            <div> <h1 className='title is-1'>Study Plan schedule</h1>
                <form className="field is-grouped " onSubmit={this.handleSubmit} >
                 <p className={classnames('control is-expanded',{error:!!this.state.error.user})}>
                    <input className="input" type="text" 
                     placeholder="รายชื่อวิชา" 
                     onChange={this.handleChange}
                     value={this.state.subject}
                     name='subject'
                    />
                    <span style={{color:'red'}}>{this.state.error.user}</span>
                </p>
                <p className="control">
                    <span className="select">
                    <select
                     name='weight'
                     value={this.state.weight} 
                     onChange={this.handleChange}
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
                    <input   type='text' className={classnames('textarea is-small',{error:!!this.state.error.user})} 
                     placeholder="Tu10:00-11:00" 
                     rows="1"
                     onChange={this.handleChange} 
                     name='time'
                     value={this.state.time}
                    />
                    <span style={{color:'red'}}>{this.state.error.user}</span>
                </p>
                 <p className="control">
                    <input type="submit" value='Save' className="button is-info" />
                </p>
            </form>
            <li>วิชา: {this.props.title} จำนวนหน่วยกิต: {this.props.weight} เรียนเวลา: {this.props.time}</li>
            {listItems}
        </div>
        )
    }
}
const mapStateToProp=(state)=>{
    return{
       title:state.Table.title,
       weight:state.Table.weight,
       time:state.Table.table.time,
       task:state.Table.task,
    }
}
const mapDispatchToProp=(dispatct)=>{
  return {
      SAVE:bindActionCreators(SAVE_DATA,dispatct),
      GET:bindActionCreators(GET_DATA,dispatct),
    }
  }
export default  connect(mapStateToProp,mapDispatchToProp)(Create);