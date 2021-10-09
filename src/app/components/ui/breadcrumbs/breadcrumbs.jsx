import React from "react"
import PropTypes from "prop-types"

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">{children}</ol>
    </nav>
  )
}

Breadcrumbs.propTypes = {
  children: PropTypes.any,
}

export default Breadcrumbs
