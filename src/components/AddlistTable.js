import React from 'react';
import {tasksRef} from '../config/firebase'

class TaskListItem extends React.Component {
    state={
        done:true,
        delets:false,
        class:''
    }
toggleChecked = () => {
    const { key, checked } = this.props.task;
    tasksRef.child(key).update({ checked: !checked });
  };

toggleStarred = () => {
    const { key, starred } = this.props.task;
    tasksRef.child(key).update({ starred: !starred });
  };

deleteTask = () => {
    const { key } = this.props.task;
    this.setState({class:'is-loading'})
    setTimeout(()=> {
         tasksRef.child(key).remove().then(()=>{
              this.setState({done:false});
              this.setState({class:''})
         });
    }, 300);
    this.setState({done:true});
  };
  render() {
      console.log(this.props.task)
    const { task } = this.props;
    let delets =(
        <div className={'is-loading'}></div>
    )
    let list =(
        <div>
            <br/>
    <div className="card">
    <header className="card-header">
        <p className="card-header-title">
        COURSE NAME: {task.title}
        </p>
        <a  className="card-header-icon" aria-label="more options">
        <span className="icon">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
        </span>
        </a>
    </header>
    <div className="card-content">
        <div className="content">
       {/* <b className='title is-4'>COURSE NAME: {d.title}</b>   <b>TIME: {d.time}</b>  <b>Weight: {d.weight}</b> */}
       <b className='title is-6'>COURSE NAME:</b>
       &emsp;
       <b className='subtitle  is-6'>  {task.title}</b>
       &emsp; &emsp;
       <b className='title is-6'>TIME:</b>
       &emsp;
       <b className='subtitle  is-6'>  {task.time}</b>  
       &emsp; &emsp;
       <b className='title is-6'>WEIGHT:</b>
       &emsp;
       <b className='subtitle  is-6'>  {task.weight}</b>
        </div>
    </div>
    <footer className="card-footer">
        <a  className="card-footer-item">Edit</a>
        <a  onClick={this.deleteTask} className="card-footer-item">Delete</a>
   </footer>
</div>
</div>)
    return (
        <div className={this.state.class}>
           {this.state.done ? list:delets}
        </div>
    );
  }
}
export default TaskListItem;