import React, { Component } from 'react'
import RenderTaber from './randerTable'
import HaedTable from './headTable'
export default class Table_layout extends Component {
    state={
        data:[{checked: false, time: " Mo13:00-15.00", title: "Thai", weight: "3", key: "-KukIixBJnfErBPZZuMi"}]
    }
    render() {
        return (
            <div>
                <HaedTable/>
                <RenderTaber date='Mon' task={this.state.data}/>
                {/* <RenderTaber date='Tue'/>
                <RenderTaber date='Wed'/>
                <RenderTaber date='Thu'/>
                <RenderTaber date='Fri'/>
                <RenderTaber date='Sat'/>
                <RenderTaber date='Sun'/> */}
            </div>
        )
    }
}
