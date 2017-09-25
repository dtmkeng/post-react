import React, { Component } from 'react'
//import RenderTaber from './randerTable'
import HaedTable from './headTable'
export default class Table_layout extends Component {
    state={
        data1:[
        {checked: false, time: "Mo14:00-15:00 F5", title: "Eng", weight: "3", key: "-KukIixBJnfErBPZZuMi"},
        {checked: false, time: "Mo08:00-10:00 F5", title: "Thai", weight: "3", key: "-KukIixBJnfErBPZZuMi"},
        {checked: false, time: "Tu09:00-10:00 F5", title: "Cmo", weight: "3", key: "-KukIixBJnfErBPZZuMi"},
     ]
    }
    render() {
         //console.log(task)
         let my=[{
            width: '120pt',
            height: '40pt',
            float: 'left',
            'magin-left':'0px',
            'background-color': '#6699ff',
            'border-style': 'solid',
            'border-width': '2px',
        },{
            width: '80pt',
            height: '40pt',
            float: 'left',
            'magin-left':'0px',
            'background-color': '#6699ff',
            'border-style': 'solid',
            'border-width': '2px',
        }]
         let rows = [];
         let dataMo=[]
         let dataTu=[]
         let Mo=[];
         let time1='';
         let time2='';
         //let M='08';let L='10'
         //let l=Math.floor(L-M);
         let deff=0;
         let sum ;
         let a,b,c,f,D,F,G,H;
        
         this.state.data1.map((d,idx)=>{
            let data='';
            for(let i=0;i<2;i++){
               data+=d.time[i].trim();
            }
            for(let i=2;i<4;i++){
               
                time1+=d.time[i].trim();
            }
            for(let i=8;i<10;i++){
                time2+=d.time[i].trim()
            }
             
             if(data==='Mo'){
                 //console.log(time2);
                 deff=0;
                 deff =Math.floor(time2-time1);
                 //console.log(deff)
                 sum = time1+deff;
                 //console.log(time1,deff,sum);
                 if(time1<10){
                    Mo=Mo.concat(sum.substr(1));
                 }else{
                    Mo=Mo.concat(sum)
                 }
                 console.log(Mo);
                 for(let i=0;i<Mo.length;i++){
                    if(Mo[i]<1000&&i<Mo.length){
                         D =Math.floor(Mo[i]/10)
                         F = Mo[i]%10;
                         //console.log(D,F);
                    }
                    if(Mo[i]>1000&&i<Mo.length){
                         G =Math.floor(Mo[i]/10000)
                         H = Mo[i]%10;
                         console.log(G,H,D,F);
                    }
                 if(D===8)dataMo.push(<div style={my[F-1]} key={idx}><div>{d.title}</div></div>);
                 if(D===14)dataMo.push(<div style={my[F-1]} key={idx}><div>{d.title}</div></div>);
                 if(G===14)dataMo.push(<div style={my[H-1]} key={idx}><div>{d.title}</div></div>);
                 if(G===8)dataMo.push(<div style={my[H-1]} key={idx}><div>{d.title}</div></div>);
                 }
                 time1='',sum=''
             } 
             else if(data==='Tu'){
                 dataTu.push(<div style={my[1]} key={idx}><div>{d.title}</div></div>);
             } 
            deff=0;
       }) 
       //console.log(Mo)
       //console.log(dataTu)
       console.log(dataMo.length)
      
    for (var i=0; i<=15;i++) {
        if(Mo[i]<1000&&i<Mo.length){
            a =Math.floor(Mo[i]/10)
            b = Mo[i]%10;
           console.log(a,b)
        }else if(Mo[i]>1000&&i<Mo.length){
            c =Math.floor(Mo[i]/10000)
            f = Mo[i]%10;
            console.log(c,f,a,b);
        }
             if(i===0){
             rows.push(<div className='list'><div>Mon</div></div>);
        }else if(i===7&&(a>10||a<9)){
               rows.push(dataMo[0]);
               i+=(b)
        }
        else if(i===1&&(c>10||c<9)){
               rows.push(dataMo[1]);
               i+=(f);
        }else if(i===7&&(c===14||c===8)){
              rows.push(dataMo[1]);
              i+=(f-1);
        }
         else{
            rows.push(<div className='list'><div></div></div>)
        }
    }
         return( <div>
                    <HaedTable/>
                    <div className='headTable'>{rows}</div>
                    {/* <div className='headTable'>{rows}</div>
                    <div className='headTable'>{rows}</div>
                    <div className='headTable'>{rows}</div> */}
          </div> )
    }
}
