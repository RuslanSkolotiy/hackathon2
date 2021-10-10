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
      url: "https://lh3.googleusercontent.com/proxy/Yipcq5cNgdJ61sTp1CQ2N4Z--F35_T98fAmq69J0tm32bka4sHM5cHmuwcED3gE-axAmqm508Ag6EPmM1UCU3ValHBeNyAoO4EaORo6gqi8B",
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
