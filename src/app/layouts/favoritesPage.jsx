import React, { useState } from "react"
import { useHistory } from "react-router"
import Breadcrumbs from "../components/ui/breadcrumbs/breadcrumbs"
import BreadcrumbsItem from "../components/ui/breadcrumbs/breadcrumbsItem"
import MemberCard from "../components/ui/memberCard/memberCard"
import { getFavoriteMembers, toggleFavorite } from "../services/members"
const FavoritesPage = () => {
  const [members, setMembers] = useState(getFavoriteMembers())
  const history = useHistory()

  const toggleFavoriteHandler = (id) => {
    toggleFavorite(id)
    setMembers(getFavoriteMembers())
  }

  const showMember = (id) => {
    history.push(`/member/${id}`)
  }

  return (
    <>
      <div>
        <Breadcrumbs>
          <BreadcrumbsItem href="/">Главная</BreadcrumbsItem>
          <BreadcrumbsItem href="/" active>
            Избранное
          </BreadcrumbsItem>
        </Breadcrumbs>
      </div>
      <div className="d-flex flex-wrap justify-content-around">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            {...member}
            toggleFavoriteHandler={toggleFavoriteHandler}
            showMember={showMember}
          />
        ))}
        {members.length === 0 && <>Список пуст</>}
      </div>
    </>
  )
}

export default FavoritesPage
