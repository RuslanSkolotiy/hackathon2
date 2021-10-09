import React from "react"
import PropTypes from 'prop-types'

const Button = ({ customCss, type, color, outline, size, disabled, handleClick, children }) => {

  const allCssProp = [
    'btn',
    customCss ? customCss : '',
    outline && color !== 'link' ? `btn-outline-${color}`: `btn-${color}`,
    size ? `btn-${size}` : ''
  ].join(' ');

  return (
    <button
      className={allCssProp}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

const btnColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']

Button.defaultProps = {
  color: 'primary',
  outline: false,
  disabled: false
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,
  color: PropTypes.oneOf(btnColors),
  customCss: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm']),
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
}

export default Button
