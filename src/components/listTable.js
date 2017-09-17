import React, { Component } from 'react'
import {get} from '../config/firebase'
import { connect }from 'react-redux'
import{SAVE_DATA} from '../action/tableAction'
import {bindActionCreators} from 'redux'
 class ListTable extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            todo:[{time:"Tu13",title:"Thai for EE", weight: "5"},{time: "op10", title: "keng op", weight: "3"}]
        }
    this.mapdata = this.mapdata.bind(this);
    }
mapdata(prop){
     //data[datakeys[i]]
      let  listItems =  this.state.data.map(function(d, idx){
        return ( <div>
              <table className='table is-fullwidth'>
                  <thead>
                          <th>Subject Name</th>
                          <th>Time</th>
                          <th>Weight</th>
                  </thead> 
                  <tbody>
                  <tr key={idx}> 
                      {/* <li key={idx}>{d.time} - {d.title} - {d.weight} </li> */}
                      <td>{d.title}</td>
                      <td>{d.time}</td>
                      <td>{d.weight}</td>
                 </tr>
                 </tbody>
              </table>
               </div>)
      })
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
        //console.log(data)
        var listItems = this.state.todo.map(function(d, idx){
          return ( <div>
                <table className='table is-fullwidth'>
                    <thead>
                            <th>Subject Name</th>
                            <th>Time</th>
                            <th>Weight</th>
                    </thead> 
                    <tbody>
                    <tr key={idx}> 
                        {/* <li key={idx}>{d.time} - {d.title} - {d.weight} </li> */}
                        <td>{d.title}</td>
                        <td>{d.time}</td>
                        <td>{d.weight}</td>
                   </tr>
                   </tbody>
                </table>
                 </div>)
        })

        return (
          <div>
 
               <h1 className='title is-1'>Table List</h1>
               <table className='table is-fullwidth'>  
                </table> {listItems}
          </div>
         
        );
    }
}
const mapStateToProp=(state)=>{
    return{
       title:state.Table.table,
       weight:state.Table.weight,
       time:state.Table.table.time,
    }
}
const mapDispatchToProp=(dispatct)=>{
  return {
      SAVE:bindActionCreators(SAVE_DATA,dispatct),
    }
  }
  export default connect(mapStateToProp,mapDispatchToProp)(ListTable);