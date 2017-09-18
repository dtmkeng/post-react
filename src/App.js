import React, { Component } from 'react';
//import {Route} from 'react-router-dom'
import Main from './components/Main'
import './App.css';
import 'bulma/css/bulma.css'
class App extends Component {
  render() {
    return (
      <div className="App container">
           <Main/>
       </div>
    );
  }
}
export default App;
