import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Table from './table'
import listTable from './listTable'
export default class Main extends Component {
    render() {
        return (
            <div>
               <Route exact path='/' component={Table}/>
               <Route path='/listTable' component={listTable}/>
            </div>
        )
    }
}
