import React, { Component } from 'react'
//import { connect }from 'react-redux'
class Create extends Component {
    constructor(){
        super();
        this.state={
            value:'',
            time:[],
            subject:''
        }
        this.textOnchange =this.textOnchange.bind(this);
        this.handlerTile =this.handlerTile.bind(this);
        this.Onclick =this.Onclick.bind(this);
}
    Onclick(){
       //console.log(this.state.value);
       //alert("Hello")
       let data = this.state.value
       let log = data.split('\n')
       //let log2 = log[0].split(' ');
       //let log3 = log[1].split(' ');
       console.log(log.length);
       for(let i=0;i<log.length;i++){
           if(log[i].length>0){
               this.state.time.push(log[i])
           }
           //console.log(log[i]);
           //log[]
       }
       // this.state.time.push(log2[0]);
        //this.state.time.push(log3[0])
       //console.log(log);
       //console.log(log3)
       //console.log(this.state.time)
       //console.log(this.state.subject)
    }
    handlerTile(event){
        this.setState({subject: event.target.value});
    }
    textOnchange(event){
        this.setState({value: event.target.value});
    }
    render() {
        return (
                <div className="field is-grouped " >
                 <p className="control is-expanded">
                    <input className="input" type="text" placeholder="รายชื่อวิชา" onChange={this.handlerTile}/>
                </p>
                <p className="control">
                    <span className="select">
                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                     </span>
                </p>
                <p className="control">
                    <textarea className="textarea is-small" placeholder="Tu10:00-11:00" rows="1" onChange={this.textOnchange}/>
                </p>
                <p className="control">
                    <p type="submit" value='Save' className="button is-info" onClick={this.Onclick}>SAVE</p>
                </p>
            </div>
        )
    }
}
export default Create