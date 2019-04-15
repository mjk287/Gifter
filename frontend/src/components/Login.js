import React, { Component } from 'react';

class LoginPage extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} required/>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} required/>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
