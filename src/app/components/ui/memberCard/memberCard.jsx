import React from "react"
import PropTypes from 'prop-types'
import './memberCard.css'
import errorPic from '../../../../accets/errorPic.jpg'
import Button from '../button/button'
import { useHistory } from "react-router"

const MemberCard = ({ id, name, lastName, photo, age, about, toggleFavoriteHandler, favorite }) => {
  const history = useHistory();

  const showMember = (e) => {
    if (e.target.classList.contains('btn')) return
    history.push(`/member/${id}`)
  }

  const onError = (e) => {
    e.target.src = errorPic
  }

  return (
    <div
      onClick={showMember}
      className="card overflow-hidden border-0 rounded-3 shadow mb-4"
      style={{ width: "18rem", cursor: 'pointer' }}
    >
      <i class={`bi bi-bookmark${ favorite ? '-fill' : ''} position-absolute end-0 pe-1 text-primary`}></i>
      <img
        src={photo || errorPic}
        onError={onError}
        class="card-img-top"
        alt={name} />
      <div class="card-body d-flex flex-column">
        <div className="d-flex justify-content-between mt-2 mb-2">
          <h5 class="card-title">{name} {lastName}</h5>
          <div>{age}</div>
        </div>
        
        <p class="card-text">
          {about}
        </p>
        <Button
          customCss="mt-auto"
          type="button"
          handleClick={() => toggleFavoriteHandler(id)}
        >
          {favorite ? 'Удалить из избранных' : 'Добавить в избранное'}
        </Button>
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
  favorite: PropTypes.bool.isRequired
}

export default MemberCard
