import React from 'react'
import { NavLink } from 'react-router-dom'

const NavComp = (props) => {
  return (
    <div>
      <NavLink
        to='/'
        >Home
      </NavLink>
      <NavLink
        to='/James/gifts/create'
      >Send a Gift
      </NavLink>
      <NavLink to='/login'>Login </NavLink>
      <a onClick={props.handleLogout}>Logout </a>
    </div>
  )
}

export default NavComp
