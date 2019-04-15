import React, { Component } from 'react'

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  render() {
    return(
      <div>
        <h1>Signup</h1>
        <form onSubmit={(e) => this.props.handleSignup(e, this.state)}>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} required/>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} required/>
          <label htmlFor='password_confirmation'>Confirm Password</label>
          <input type='password' name='password_confirmation' placeholder='Confirm Password' value={this.state.password_confirmation} onChange={this.handleChange} required/>
          <label htmlFor='first_name'>First Name</label>
          <input type='text' name='first_name' placeholder='First Name' value={this.state.first_name} onChange={this.handleChange} required/>
          <label htmlFor='last_name'>Last Name</label>
          <input type='text' name='last_name' placeholder='Last Name' value={this.state.last_name} onChange={this.handleChange} required/>
          <button>Signup</button>
        </form>
      </div>
    )
  }
}

export default SignupPage
