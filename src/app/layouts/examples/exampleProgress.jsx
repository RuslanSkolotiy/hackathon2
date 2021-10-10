import React from "react"
import Progress from "../../components/ui/progress/progress"

const ExampleProgress = () => {
  return (
    <div className="mb-5">
      <h2>Progress</h2>
      <div>
        <Progress title="HTML" value="30">
          30%
        </Progress>
        <Progress title="JS" value="40" color="secondary">
          40%
        </Progress>
        <Progress title="CSS" value="50" color="success">
          50%
        </Progress>
        <Progress title="ReactJs" value="60" color="danger">
          60%
        </Progress>
        <Progress title="Vue" value="70" color="warning">
          70%
        </Progress>
        <Progress title="NodeJs" value="80" color="info">
          80%
        </Progress>
      </div>
    </div>
  )
}

export default ExampleProgress
