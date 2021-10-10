import React, {useState, useEffect} from "react"
import slide1 from "./imgs/1.png";
import slide2 from "./imgs/2.png";
import slide3 from "./imgs/3.png";
import slide4 from "./imgs/4.png";
import ItemSlider from "./itemSlider"

const img = [
    <img  src={slide1} className="d-block w-100" alt="..." />,
    <img  src={slide2} className="d-block w-100" alt="..." />,
    <img  src={slide3} className="d-block w-100" alt="..." />,
    <img  src={slide4} className="d-block w-100" alt="..." />,
]

const Slider = () => {
    //light dark

    //https://miro.medium.com/max/9920/1*QtwrtAuLjpu7vaO2i9sbPA.png
    const slider = [
        {
            img: <img  src={slide1} className="d-block w-100" alt="..." />,
            title: 'First slide label',
            content: 'Some representative placeholder content for the first slide.'
        },
        {
            img: <img  src={slide2} className="d-block w-100" alt="..." />,
            title: 'First slide label',
            content: 'Some representative placeholder content for the first slide.'
        },
        {
            img: <img  src={slide3} className="d-block w-100" alt="..." />,
            title: 'First slide label',
            content: 'Some representative placeholder content for the first slide.'
        },
        {
            img: <img  src={slide4} className="d-block w-100" alt="..." />,
            title: 'First slide label',
            content: 'Some representative placeholder content for the first slide.'
        },
    ]

    const dopNameClass = (t) => t === 1 && 'carousel-item'

    const next = 'carousel-item-next'    //carousel-item-next
    const start = 'carousel-item-start'  //carousel-item-start


    const [activeClass, setAcriveClass] = useState(0)
    const [sideFlip, setSideFlip] = useState(0)

    const actionStart = () => {
        return `${next} ${start}`
    }
    const actionNext = () => {
        return `${start}`
    }

    useEffect(() => {
        const time = setTimeout(() => {
            
        }, 2000)
        return () => {
            setAcriveClass((current) => {
                
            })
             clearTimeout()
        }
    }, [sideFlip])

    // Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeClass ? activeClass - 1 : slider.length - 1
    // Вычисляем индекс следующего слайда
    const nextImgIndex = activeClass === slider.length - 1 ? 0 : activeClass + 1

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

      <div className="carousel-indicators">
        <button
            key={1}
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"

          aria-current="true"
          aria-label="Slide 1">

        </button>
        <button
            key={2}
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            className="active"
            aria-label="Slide 2">

        </button>
        <button
            key={3}
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"

            aria-label="Slide 3">

        </button>
      </div>

      <div  className="carousel-inner">

          <div className={`carousel-item ${start} ${next}`} data-bs-interval="10000">
              {slider[nextImgIndex].img}
              <div className="carousel-caption d-none d-md-block">
                  <h5>{slider[nextImgIndex].title}</h5>
                  <p>{slider[nextImgIndex].content}</p>
              </div>
          </div>

          <div className="carousel-item active" data-bs-interval="10000">
                  {slider[activeClass].img}
              <div className="carousel-caption d-none d-md-block">
                  <h5>{slider[activeClass].title}</h5>
                  <p>{slider[activeClass].content}</p>
              </div>
          </div>

          <div className="carousel-item " data-bs-interval="10000">
              {slider[prevImgIndex].img}
              <div className="carousel-caption d-none d-md-block">
                  <h5>{slider[prevImgIndex].title}</h5>
                  <p>{slider[prevImgIndex].content}</p>
              </div>
          </div>

      </div>

      <button onClick={() => setAcriveClass(nextImgIndex)} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button onClick={() => setAcriveClass(prevImgIndex)} className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Slider
