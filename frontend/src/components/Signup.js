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
      <form className='uk-text-center' onSubmit={(e) => this.props.handleSignup(e, this.state)}>
        <img id='heartLogo' src={require('../assets/heartLogoFinal.gif')}/>
        <h1>Signup</h1>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: user"></span>
            <input className="uk-input uk-border-rounded" type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} required />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
            <input className="uk-input uk-border-rounded" type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} required />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
            <input className="uk-input uk-border-rounded" type='password' name='password_confirmation' placeholder='Confirm Password' value={this.state.password_confirmation} onChange={this.handleChange} required />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: blank"></span>
            <input className="uk-input uk-border-rounded" type='text' name='first_name' placeholder='First Name' value={this.state.first_name} onChange={this.handleChange} required />
          </div>
        </div><div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: blank"></span>
            <input className="uk-input uk-border-rounded uk-border-rounded" type='text' name='last_name' placeholder='Last Name' value={this.state.last_name} onChange={this.handleChange} required />
          </div>
        </div>
        <button class="uk-button uk-button-primary uk-border-rounded">Signup</button>
      </form>
    )
  }
}

export default SignupPage
