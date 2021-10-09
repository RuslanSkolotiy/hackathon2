import React from "react"
import PropTypes from 'prop-types'
import './memberCard.css'

const MemberCard = ({ id, name, age, img, about, addToFavourites, showContributor, isFavourites }) => {
  
  const handleClick = (e) => {
    if (e.target.textContent === 'Добавить в избранное') return
    showContributor(id)
  }

  return (
    <div
      onClick={handleClick}
      className="card overflow-hidden border-0 rounded-3 shadow"
      style={{ width: "18rem", cursor: 'pointer' }}
    >
      <i class={`bi bi-bookmark${ isFavourites ? '-fill' : ''} position-absolute end-0 pe-1 text-primary`}></i>
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <div className="d-flex justify-content-between mt-2 mb-2">
          <h5 class="card-title">{name}</h5>
          <div>{age}</div>
        </div>
        
        <p class="card-text">
          {about}
        </p>
        <button className="btn btn-primary" onClick={() => addToFavourites(id)}>Добавить в избранное</button>
      </div>
    </div>
  )
}

MemberCard.defaultProps = {
  isFavourites: false
}

MemberCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  addToFavourites: PropTypes.func.isRequired,
  showContributor: PropTypes.func.isRequired,
  isFavourites: PropTypes.bool.isRequired
}

export default MemberCard
