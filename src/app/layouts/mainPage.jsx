import React, { useState } from "react"
import Breadcrumbs from "../components/ui/breadcrumbs/breadcrumbs"
import BreadcrumbsItem from "../components/ui/breadcrumbs/breadcrumbsItem"
import MemberCard from "../components/ui/memberCard/memberCard"
import { getMembers, toggleFavorite } from "../services/members"
import Button from "../components/ui/button/button"

const MainPage = () => {
  const [members, setMembers] = useState(getMembers())

  const toggleFavoriteHandler = (id) => {
    toggleFavorite(id)
    setMembers(getMembers())
    console.log(members)
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
      <div className="row">
        {members.map((member) => (
          <div className="col-sm-4 pb-4" key={member.id}>
            <MemberCard />
            <Button type="button" handleClick={() => toggleFavoriteHandler(member.id)} customCss="mt-2">
              {member.favorite ? "Удалить из избранных" : "Добавить в избранные"}
            </Button>
          </div>
        ))}
      </div>
    </>
  )
}

export default MainPage
