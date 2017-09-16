import React, { Component } from 'react'
import {get} from '../config/firebase'
export default class ListTable extends Component {
    constructor(){
        super();
        this.state={
            data:[]
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
    let text=[];
    get.ref().child('table').orderByKey().once('value',(snapshot)=>{
    //   let data = snapshot.val();
    //   let datakeys = Object.keys(data)
    //   console.log(datakeys.length)
    //   console.log(datakeys[0])
    //   for(let i =0;i<datakeys.length;i++){
    //        console.log(data[datakeys[i]]);
    //       // this.state.data.push(data[datakeys[i]])
    //       text.concat(data[datakeys[i]])
    //   }
    snapshot.forEach((childSnapshot) => {
        text.push(childSnapshot.val());
      })
  })
  this.setState({data:text})
}
    render() {
        const data =[{time:"Tu13",title:"Thai for EE", weight: "5"},{time: "op10", title: "keng op", weight: "3"}];
       /// console.log(data)
        var listItems = data.map(function(d, idx){
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
       /// console.log(this.state.data);
        return (
          <div>
               <h1 className='title is-1'>Table List</h1>
               <table className='table is-fullwidth'>  
                </table> {listItems}
             {/* //{this.mapdata(this.state.data)} */}
          </div>
        );
    }
}
