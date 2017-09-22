import React, { Component } from 'react'
import {get} from '../config/firebase'
import { connect }from 'react-redux'
import{GET_DATA} from '../action/tableAction'
import {bindActionCreators} from 'redux'
import TaskListItem from './AddlistTable'
class ListTable extends Component {
   constructor(){
     super();
      this.state = {
        task: [],
        tasksLoading: true
      };
   }
componentDidMount(){
  get.ref().child('table').once('value',(snapshot)=>{
    let task=[]
    snapshot.forEach(shot => {
       console.log(shot.val())
       task.push({ ...shot.val(), key: shot.key });
    });
    this.setState({ task:this.state.task.concat(task), tasksLoading: false });
    this.props.GET(task);
  });
   this.forceUpdate();
}
  render() {
        const { task, tasksLoading } = this.state;
        let taskList;
        if (tasksLoading) {
          taskList = <div className="title is-1">Loading...</div>;
        } else if (task.length) {
            taskList =(<ul>
                  <h1 className='title is-1'>Table List</h1>
                  {this.state.task.map(task => (
                    <TaskListItem key={task.key} task={task} />
                  ))}
                  </ul>)
        } else {
          taskList = <div className="title is-1">No Tasks</div>;
        }
        return taskList;
    }
 }
 const mapStateToProp=(state)=>{
  return{
     task:state.Table.task
  }
}
const mapDispatchToProp=(dispatct)=>{
return {
    GET:bindActionCreators(GET_DATA,dispatct),
  }
}
  export default connect(mapStateToProp,mapDispatchToProp)(ListTable)