import React from "react"
import PropTypes from "prop-types"

const Progress = ({ title, children, value, color, height }) => {
  return (
    <>
      {title && <div>{title}</div>}
      <div className="progress" style={{ height: height + "px" }}>
        <div className={"progress-bar bg-" + color} role="progressbar" style={{ width: value + "%" }}>
          {children}
        </div>
      </div>
    </>
  )
}

const btnColors = ["primary", "secondary", "success", "danger", "warning", "info"]

Progress.defaultProps = {
  color: "primary",
  height: 20,
}

Progress.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf(btnColors),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.any,
}

export default Progress
