import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './pages/routes'
import NavComp from './components/NavComp'

class App extends Component {

  state = {
    name: 'James'
  }

  render() {
    return (
      <div>
        <NavComp/>
        <Routes name={this.state.name}/>
      </div>
    );
  }
}

export default App;
