import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Navbar = ({ title, children }) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{children}</ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export default Navbar
