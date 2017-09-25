import React, { Component } from 'react'
export default class RenderTaber extends Component {
      state={
            pad:'80pt'
        }
    render() {
        const { task } = this.props;
        console.log(task)
        let my=[{
            width: '80pt',
            height: '40pt',
            float: 'left',
            'magin-left':'0px',
            'background-color': '#6699ff',
            'border-style': 'solid',
            'border-width': '2px',
        },{
            width: '120pt',
            height: '40pt',
            float: 'left',
            'magin-left':'0px',
            'background-color': '#6699ff',
            'border-style': 'solid',
            'border-width': '2px',
        }]
         //console.log(task)
        var rows = [];
        for (var i=0; i<=15;i++) {
            if(i===0){
            rows.push(<div className='list'><div>{this.props.date}</div></div>);
          }else if(i===3||i===6||i===9){
            rows.push(<div style={my[0]}><div>{task.title}</div></div>);
            i++;
        }else{
            rows.push(<div className='list'><div></div></div>)
        }
       }
        return <div className='headTable'>{rows}</div>
        // return (

        //     <div>
        //         <div className='T'>
        //         <div className='headTable'>
        //             <div className='list'><div>{this.props.date}</div></div>
        //             {   
        //                 task.map((d, idx) =>{
        //                 if(d.time=='16'){
        //                     return <div style={my[0]} key={idx} ><div>{d.title}</div></div>
        //                 }else if(d.time=='15'){
        //                     return <div style={my[1]} key={idx} ><div>{d.title}</div></div>
        //                 }else if(!d.time){
        //                     return <div className='list' key={idx}><div></div></div>
        //                 }
        //               }
        //             )}     
        //         </div>
        //     </div>
        //     </div>
        // )
    }
}
