import React from "react"
import Badge from "../../components/ui/badge/badge"

const ExampleBadge = () => {
  return (
    <div className="mb-5">
      <h2>Badge</h2>
      <div>
        <p>
          <Badge>
            <h1>Badge1</h1>
          </Badge>
        </p>
        <p>
          <Badge>
            <h2>Badge1</h2>
          </Badge>
        </p>
        <p>
          <Badge>
            <h3>Badge1</h3>
          </Badge>
        </p>
        <p>
          <Badge>
            <h4>Badge1</h4>
          </Badge>
        </p>
        <p>
          <Badge>Badge1</Badge>{" "}
          <Badge customCss="ms-1" color="danger">
            Badge2
          </Badge>
          <Badge customCss="ms-1" color="secondary">
            Badge3
          </Badge>
          <Badge customCss="ms-1" color="warning">
            Badge4
          </Badge>
          <Badge customCss="ms-1" color="info">
            Badge5
          </Badge>
        </p>
      </div>
    </div>
  )
}

export default ExampleBadge
