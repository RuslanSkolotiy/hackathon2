import React from "react"
import Button from "../../components/ui/button/button"

const ExampleButton = () => {
  const clickHandler = (e) => {
    console.log("click")
  }
  return (
    <div className="mb-5">
      <h2>Button</h2>
      <div>
        <Button type="button" color="secondary" outline={true} handleClick={clickHandler} customCss="ms-2 mb-2">
          Open
        </Button>
        <Button type="button" color="primary" handleClick={clickHandler} customCss="ms-2 mb-2">
          Primary
        </Button>
        <Button type="button" color="secondary" handleClick={clickHandler} customCss="ms-2 mb-2">
          Secondary
        </Button>
        <Button type="button" color="success" handleClick={clickHandler} customCss="ms-2 mb-2">
          Success
        </Button>
        <Button type="button" color="danger" handleClick={clickHandler} customCss="ms-2 mb-2">
          Danger
        </Button>
        <Button type="button" color="warning" handleClick={clickHandler} customCss="ms-2 mb-2">
          Warning
        </Button>
        <Button type="button" color="info" handleClick={clickHandler} customCss="ms-2 mb-2">
          Info
        </Button>
        <Button type="button" color="light" handleClick={clickHandler} customCss="ms-2 mb-2">
          Light
        </Button>
        <Button type="button" color="dark" handleClick={clickHandler} customCss="ms-2 mb-2">
          Dark
        </Button>
        <Button type="button" color="link" handleClick={clickHandler} customCss="ms-2 mb-2">
          Link
        </Button>
      </div>
    </div>
  )
}

export default ExampleButton
