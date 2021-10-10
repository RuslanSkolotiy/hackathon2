import React, { useState } from "react"
import { useHistory } from "react-router"
import Breadcrumbs from "../components/ui/breadcrumbs/breadcrumbs"
import BreadcrumbsItem from "../components/ui/breadcrumbs/breadcrumbsItem"
import MemberCard from "../components/ui/memberCard/memberCard"
import { getMembers, toggleFavorite } from "../services/members"

const MainPage = () => {
  const [members, setMembers] = useState(getMembers())
  const history = useHistory()

  const toggleFavoriteHandler = (id) => {
    toggleFavorite(id)
    setMembers(getMembers())
    console.log(members)
  }

  const showMember = (id) => {
    history.push(`/member/${id}`)
  }

  return (
    <>
      <div>
        <Breadcrumbs>
          <BreadcrumbsItem href="/" active>
            Главная
          </BreadcrumbsItem>
        </Breadcrumbs>
      </div>
      <div className="d-flex flex-wrap justify-content-around">
        {members.map((member) => (
            <MemberCard key={member.id} {...member} toggleFavoriteHandler={toggleFavoriteHandler} showMember={showMember}/>
        ))}
      </div>
    </>
  )
}

export default MainPage
