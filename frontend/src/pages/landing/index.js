import React from 'react'
import LoginPage from '../../components/Login'
import SignupPage from '../../components/Signup'

const LandingPage = props => {
  return(
    <div className='uk-column-1-2 uk-column-divider'>
      <LoginPage handleLogin={props.handleLogin} />
      <SignupPage handleSignup={props.handleSignup} />
    </div>
  )
}

export default LandingPage
