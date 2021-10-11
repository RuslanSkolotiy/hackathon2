import React from "react"
import Slider from "../../components/ui/slider/slider"

const ExampleSlider = () => {
  const images = [
    {
      title: "Slide 1",
      url: "https://v-georgia.com/wp-content/uploads/2016/05/zakat_batumi4.jpg",
    },
    {
      title: "Slide 2",
      url: "https://static5.depositphotos.com/1003371/521/i/600/depositphotos_5214674-stock-photo-tropical-sea-sunset.jpg",
    },
  ]
  return (
    <div className="mb-5">
      <h2>Slider</h2>
      <div>
        <Slider images={images} />
      </div>
    </div>
  )
}

export default ExampleSlider
