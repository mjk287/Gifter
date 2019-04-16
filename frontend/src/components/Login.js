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
      <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
        <h1>Login</h1>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: user"></span>
            <input className="uk-input" type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} required />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
            <input className="uk-input" type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} required />
          </div>
        </div>
        <button className="uk-button uk-button-primary">Login</button>
      </form>
    );
  }
}

export default LoginPage;
