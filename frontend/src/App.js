import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './pages/routes'
import NavComp from './components/NavComp'
import LoginPage from './login/index'
import SignupPage from './signup/index'

class App extends Component {

  state = {
    user: null
  }

  handleSignup = user => {
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
        this.setState({
          user: userObj.user
        }, () => {
          localStorage.setItem("token", userObj.jwt)
          console.log(this.state.user)
        })
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
        <NavComp/>
        <Route
          exact path='/login'
          render={() => <LoginPage handleLogin={this.props.handleLogin}/>}
        />
        <Route
          exact path='/signup'
          render={() => <SignupPage handleLogin={this.props.handleLogin}/>}
        />
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
