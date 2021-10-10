import React from "react"
import PropTypes from 'prop-types'
import './memberCard.css'
import errorPic from "../../../assets/img/errorPic.jpg"

const MemberCard = ({ id, name, lastName, photo, age, about, toggleFavoriteHandler, showMember, favorite }) => {

  const handleClick = (e) => {
    if (e.target.closest('.bi')) return
    showMember(id)
  }

  const onError = (e) => {
    e.target.src = errorPic
  }

  return (
    <div
      onClick={handleClick}
      className="card overflow-hidden border-0 rounded-3 shadow mb-4"
      style={{ width: "18rem", cursor: 'pointer' }}
    >
      <i
        onClick={() => toggleFavoriteHandler(id)}
        className={`bi bi-bookmark${ favorite ? '-fill' : ''} position-absolute end-0 pe-1 text-primary`}
        title={favorite ? 'Удалить из избранных' : 'Добавить в избранное'}>
      </i>
      <img
        src={photo || errorPic}
        onError={onError}
        className="card-img-top"
        alt={name} />
      <div className="card-body">
        <div className="d-flex justify-content-between mt-2 mb-2">
          <h5 className="card-title">{name} {lastName}</h5>
          <div>{age}</div>
        </div>
        
        <p className="card-text">
          {about}
        </p>
      </div>
    </div>
  )
}

MemberCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  toggleFavoriteHandler: PropTypes.func.isRequired,
  showMember: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired
}

export default MemberCard
