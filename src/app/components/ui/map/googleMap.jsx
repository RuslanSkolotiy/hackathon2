import React from "react"
import PropTypes from "prop-types"

const GoogleMap = ({ width, height, title, query, apiKey }) => {
  const embedUrl = "https://www.google.com/maps/embed/v1/place?key=" + apiKey + "&q=" + query
  return (
    <iframe title={title} src={embedUrl} style={{ border: 0, height: height, width: width }} loading="lazy"></iframe>
  )
}
GoogleMap.defaultProps = {
  width: "100%",
  height: "400px",
  title: "Google map",
}
GoogleMap.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  query: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
}

export default GoogleMap
