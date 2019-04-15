import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './pages/routes'
import NavComp from './components/NavComp'
import LandingPage from './pages/landing/index'

class App extends Component {

  state = {
    user: null
  }

  handleSignup = (e, user) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(userObj => {
        localStorage.setItem('token', userObj.jwt)
        this.setState({
          user: userObj.user
      }, () => console.log(this.state.user))
      })
  }

  handleLogin = (e, user) => {
    console.log(user)
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(userObj => {
        localStorage.setItem('token', userObj.jwt)
        this.setState({
          user: userObj.user
      }, () => console.log(this.state.user))
    })
  }

  handleLogout = () => {
   this.setState({
     user: null
   }, () => console.log(this.state.user))
   localStorage.removeItem("token")
  }

  render() {
    return (
      <div>
        <NavComp user={this.state.user} handleLogout={this.handleLogout}/>
        { !!this.state.user ?
          <Routes user={this.state.user}/>
          :
          <LandingPage handleLogin={this.handleLogin} handleSignup={this.handleSignup} />
        }
      </div>
    );
  }

  componentDidMount(){
    if(localStorage.getItem('token')){
      fetch("http://localhost:3000/api/v1/current_user", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      })
      .then(res => res.json())
      .then(userJSON => {
        this.setState({
          user: userJSON.user
        }, () => console.log(this.state.user))
      })
    }
  }
}

export default App;
