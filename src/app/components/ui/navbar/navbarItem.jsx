import React from "react"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

const NavbarItem = ({ name, href }) => {
  return (
    <li className="nav-item">
      <NavLink to={href} exact className="nav-link" activeClassName="active">
        {name}
      </NavLink>
    </li>
  )
}

NavbarItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default NavbarItem
