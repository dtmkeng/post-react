import React, { Component } from 'react'
//import RenderTaber from './randerTable'
import HaedTable from './headTable'
export default class Table_layout extends Component {
    state={
        data1:[
         {checked: false, time: "Mo14:00-15:00 F5", title: "Eng", weight: "3", key: "-KukIixBJnfErBPZZuMi"},
         {checked: false, time: "Mo10:00-12:00 F5", title: "Thai", weight: "3", key: "-KukIixBJnfErBPZZuMi"},
         {checked: false, time: "Mo08:00-10:00 F5", title: "Computer", weight: "3", key: "-KukIixBJnfErBPZZuMi"},
        ],
        my:[{
            width: '40pt',
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
        },
        {
            width: '120pt',
            height: '40pt',
            float: 'left',
            'magin-left':'0px',
            'background-color': '#6699ff',
            'border-style': 'solid',
            'border-width': '2px',
        },
        {
            width: '160pt',
            height: '40pt',
            float: 'left',
            'magin-left':'0px',
            'background-color': '#6699ff',
            'border-style': 'solid',
            'border-width': '2px',
        }
      ],
        row:[],
        Mon:[],
    }
componentDidMount(){
     let row=[];
     let time1='';
     let time2='';
     let deff=0;
     let sum ;let MO=[]
     let indexcss=0;
     let indextime=0;
    this.state.data1.map((d,idx)=>{
        for(let i=0;i<2;i++){
           }
            for(let i=2;i<4;i++){
                time1+=d.time[i].trim();
            }
            for(let i=8;i<10;i++){
                time2+=d.time[i].trim()
           }
           deff =Math.floor(time2-time1);
           sum=time1+deff;
            //console.log(time1.toString());
           if(time1<10){
                MO=MO.concat(sum.substr(1));
                sum=sum.substr(1);
                //console.log("Hh")
            }else{
                MO=MO.concat(sum)
            }
               console.log(MO)
              
           indexcss=parseInt(sum)%10;
           indextime=Math.floor((sum)/10);
           //
           
           
           console.log(indextime)
          if(idx===0){
             row.push(<div className='list'><div>Mon</div></div>);
             row.push(<div style={this.state.my[indexcss-1]} key={idx}><div>{d.title}</div></div>);   
          }else{
             row.push(<div style={this.state.my[indexcss-1]} key={idx}><div>{d.title}</div></div>);
          }
          //console.log(idx);
          time1='';sum=' '; deff=0; time2='';
       }) 
       //this.setState({Mon:this.state.Mon.push(MO)})
       
          //console.log(this.state.row.length)
          let rowMO=[]
          let index=1;
          //console.log(row);
          
          let insert = (arr, index, newItem) => [
            // part of the array before the specified index
            ...arr.slice(0, index),
            // inserted item
            newItem,
            // part of the array after the specified index
            ...arr.slice(index)
          ]
          
          let result;
          //console.log(row)
          for(let i=0;i<MO.length;i++){
            indexcss=parseInt(MO[i])%10;
            indextime=Math.floor((MO[i])/10)
            console.log(indextime,indexcss)
            switch(indextime){
                case 8 :{
                    console.log('index1 = '+index)
                    row.slice(1,3)
                    console.log(row);
                    index++;
                }break;
                case 10:{
                    console.log('index2= '+index)
                    row.slice(2,1)
                    //row[2]=row[index]
                    //row.splice(2,0,row[index]);
                    //insert(row,2,row[index])
                    console.log(row)
                    index++;
                }break;
                case 14:{
                    console.log('index3 = '+index)
                    row.slice(3,index-1)
                    //row[3]=row[index]
                    //row.splice(3,0,row[index]);
                    //row.splice(row.length,1);
                    //insert(row,3,row[index])
                    console.log(row)
                    index++;
                }
            }
            
          }
          this.setState({row:row});

    }
    render() {
         return( <div>
                    <HaedTable/>
                    <div className='headTable'>{this.state.row}</div>
                    {/* <div className='headTable'>{rows}</div>
                    <div className='headTable'>{rows}</div>
                    <div className='headTable'>{rows}</div> */}   
          </div> )
    }
}
