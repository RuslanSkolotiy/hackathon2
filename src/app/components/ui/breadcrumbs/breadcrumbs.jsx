import React from "react"

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">{children}</ol>
    </nav>
  )
}

export default Breadcrumbs
