import React from "react"
import Button from "../../components/ui/button/button"

const ExampleButton = () => {
  const clickHandler = (e) => {
    console.log('click')
  }
  return (
    <div className="mb-5">
      <h2>Button</h2>
      <div>
        <Button
          type='button'
          color='secondary'
          outline={true}
          handleClick={clickHandler}
        >
          Open
        </Button>
      </div>
    </div>
  )
}

export default ExampleButton
