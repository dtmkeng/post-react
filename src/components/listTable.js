import React, { Component } from 'react'
import {get} from '../config/firebase'
import AddlistTable from './AddlistTable'
 class ListTable extends Component {
    constructor(){
        super();
        this.state={
            todo:[]
        }
}
componentDidMount(){  
    get.ref().child('table').once('value',(snapshot)=>{
        let Todo=[]
        let that =this;
        snapshot.forEach((data)=>{
            //console.log(data.val())
            let todo={
                title:data.val().title,
                time:data.val().time,
                weight:data.val().weight
            }
            Todo.push(todo);
            that.setState({todo:Todo})
        })
  })
}
    render() {
        return (
          <div>
               <h1 className='title is-1'>Table List</h1>
                <AddlistTable data={this.state.todo}/>
          </div>
         
        );
    }
 }
  export default ListTable