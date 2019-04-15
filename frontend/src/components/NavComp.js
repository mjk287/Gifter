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
    </div>
  )
}

export default NavComp
