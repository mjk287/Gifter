import React from 'react'
import LoginPage from '../../components/Login'
import SignupPage from '../../components/Signup'

const LandingPage = props => {
  return(
    <div>
      <SignupPage handleSignup={props.handleSignup} />
      <hr/>
      <LoginPage handleLogin={props.handleLogin} />
    </div>
  )
}

export default LandingPage
