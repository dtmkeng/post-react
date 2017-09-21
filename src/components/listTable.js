import React, { Component } from 'react'
import {get} from '../config/firebase'
import orderBy from 'lodash/orderBy';
import TaskListItem from './AddlistTable'
 class ListTable extends Component {
    state = {
        task: [],
        tasksLoading: true
      };
componentDidMount(){  
  get.ref().child('table').once('value',(snapshot)=>{
    let task=[]
    let that =this;
    snapshot.forEach(shot => {
       console.log(shot.val())
       task.push({ ...shot.val(), key: shot.key });
    });
    this.setState({ task, tasksLoading: false });
  });
  
}
    render() {
        const { task, tasksLoading } = this.state;
        const orderedTasks = orderBy(
          task,
          ['checked', 'starred'],
          ['asc', 'desc']
        );
        let taskList;
       
           
    
        if (tasksLoading) {
          taskList = <div className="title is-1">Loading...</div>;
        } else if (task.length) {
            taskList =<div>
                  <h1 className='title is-1'>Table List</h1>
                  {orderedTasks.map(task => (
                    <TaskListItem key={task.key} task={task} />
                  ))}
                  </div>
        } else {
          taskList = <div className="title is-1">No Tasks</div>;
        }
    
        return taskList;
    }
 }
  export default ListTable