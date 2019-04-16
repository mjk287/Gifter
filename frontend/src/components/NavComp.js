import React from 'react'
import { NavLink } from 'react-router-dom'

const NavComp = (props) => {
  return (
    <div className="uk-position-top">
      <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active"><a href={props.user ?  `/${props.user.first_name}/gifts` : '/'}>Home</a></li>
            <li className="uk-active"><a href={props.user ?  `/${props.user.first_name}/gifts/create` : '/'}>Send Gift</a></li>
            <li className="uk-active"><a onClick={props.handleLogout}>Logout</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavComp
