import React, { Component } from 'react';
import Table from './components/table'
import './App.css';
import 'bulma/css/bulma.css'
class App extends Component {
  render() {
    return (
      <div className="App container">
       <Table/>
      </div>
    );
  }
}
export default App;
