import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const BreadcrumbsItem = ({ href, active, children }) => {
  return (
    <li className={"breadcrumb-item" + (active ? " active" : "")}>
      {active ? children : <Link to={href}>{children}</Link>}
    </li>
  )
}

BreadcrumbsItem.defaultProps = {
  to: "/",
}

BreadcrumbsItem.propTypes = {
  href: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.any,
}

export default BreadcrumbsItem
