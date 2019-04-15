import React from 'react'
import LoginPage from '../../components/Login'
import SignupPage from '../../components/Signup'

const LandingPage = props => {
  return(
    <div>
      <LoginPage handleLogin={props.handleLogin} />
      <SignupPage handleSignup={props.handleSignup} />
    </div>
  )
}

export default LandingPage
