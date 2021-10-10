import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

const Slider = ({ images, autoscroll, interval }) => {
  const [currectIndex, setCurrectIndex] = useState(0)
  useEffect(() => {
    if (autoscroll) {
      setTimeout(autoScroll, interval)
    }
  }, [])

  const autoScroll = () => {
    nextHandler()
    setTimeout(autoScroll, interval)
  }

  const prevHandler = () => {
    if (currectIndex === 0) {
      setCurrectIndex(images.length - 1)
    } else {
      setCurrectIndex(currectIndex - 1)
    }
  }

  const nextHandler = () => {
    setCurrectIndex((prevState) => {
      if (prevState === images.length - 1) {
        return 0
      } else {
        return prevState + 1
      }
    })
  }

  const setSlideHandler = (index) => {
    setCurrectIndex(index)
  }

  return (
    <div className="carousel slide">
      <div className="carousel-indicators">
        {images.map((image, i) => (
          <button
            key={i}
            type="button"
            className={i === currectIndex ? "active" : ""}
            data-bs-target="#carouselExampleCaptions"
            onClick={() => setSlideHandler(i)}></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, i) => (
          <div key={i} className={"carousel-item" + (i === currectIndex ? " active" : "")}>
            <img src={image.url} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>{image.title}</h5>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" onClick={prevHandler}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={nextHandler}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
Slider.defaultProps = {
  autoscroll: true,
  interval: 5000,
}
Slider.propTypes = {
  images: PropTypes.array.isRequired,
  autoscroll: PropTypes.bool,
  interval: PropTypes.number,
}

export default Slider
