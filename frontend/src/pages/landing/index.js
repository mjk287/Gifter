import React from 'react'
import LoginPage from '../login/index'
import SignupPage from '../signup/index'

const LandingPage = props => {
  return(
    <div>
      <LoginPage handleLogin={props.handleLogin} />
      <SignupPage handleSignup={props.handleSignup} />
    </div>
  )
}

export default LandingPage
