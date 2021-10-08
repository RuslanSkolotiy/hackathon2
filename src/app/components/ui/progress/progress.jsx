import React from "react"

const Progress = () => {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "25%" }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100">
        25%
      </div>
    </div>
  )
}

export default Progress
