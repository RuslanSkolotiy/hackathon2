import React from "react"

const MemberCard = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-28.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  )
}

export default MemberCard