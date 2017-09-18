import React, { Component } from 'react'
export default class AddlistTable extends Component {
    render() {
        let listItem =this.props.data.map((d,idx)=>{
            return (
                <div>
                    {/* <li key={idx}>{d.title}-{d.time}-{d.weight}</li> */}
                    <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                COURSE NAME: {d.title}
                </p>
                <a href="#" className="card-header-icon" aria-label="more options">
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
               <b className='subtitle  is-6'>  {d.title}</b>
               &emsp; &emsp;
               <b className='title is-6'>TIME:</b>
               &emsp;
               <b className='subtitle  is-6'>  {d.time}</b>  
               &emsp; &emsp;
               <b className='title is-6'>WEIGHT:</b>
               &emsp;
               <b className='subtitle  is-6'>  {d.weight}</b>
                </div>
            </div>
            <footer className="card-footer">
                <a href="#" className="card-footer-item">Edit</a>
                <a href="#" className="card-footer-item">Delete</a>
           </footer>
       </div>
                </div>
            )
        })
        return (
            <div>
                {listItem}
            </div>
        )
    }
}
