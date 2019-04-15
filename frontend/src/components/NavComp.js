import React from 'react'
import { NavLink } from 'react-router-dom'

const NavComp = (props) => {
  return (
    <div>
      <NavLink
        to={props.user ?  `/${props.user.first_name}/gifts` : '/'}
        >Home
      </NavLink>
      <NavLink
        to={props.user ?  `/${props.user.first_name}/gifts/create` : '/'}
      >Send a Gift
      </NavLink>
      <a onClick={props.handleLogout}>Logout </a>
    </div>
  )
}

export default NavComp
