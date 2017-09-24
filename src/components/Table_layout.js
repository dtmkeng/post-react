import React, { Component } from 'react'
import RenderTaber from './randerTable'
import HaedTable from './headTable'
export default class Table_layout extends Component {
    render() {
        return (
            <div>
                <HaedTable/>
                <RenderTaber date='Mon'/>
                <RenderTaber date='Tue'/>
                <RenderTaber date='Wed'/>
                <RenderTaber date='Thu'/>
                <RenderTaber date='Fri'/>
                <RenderTaber date='Sat'/>
                <RenderTaber date='Sun'/>
            </div>
        )
    }
}
