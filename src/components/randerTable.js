import React, { Component } from 'react'
export default class RenderTaber extends Component {
    render() {
         let { task }  = this.props
        console.log(task)
        let my={
            width: '80pt',
            height: '40pt',
            float: 'left',
            'background-color': '#6699ff',
            'border-style': 'solid',
            'border-width': '2px',
        }
        return (
            <div>
                <div className='T'>
                <div className='headTable'>
                    <div className='list'><div>{this.props.date}</div></div>
                    {task.map((d, idx) =>{
                         return <div style={my} key={idx} ><div>{d.title}</div></div>
                    })}
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>
                    <div className='list'><div></div></div>           
                </div>
            </div>
            </div>
        )
    }
}
