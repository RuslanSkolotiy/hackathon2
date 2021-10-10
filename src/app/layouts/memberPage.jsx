import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMember, toggleFavorite } from "../services/members"
import { calcAge } from "../utilities/math"
import Button from "../components/ui/button/button"
import { settings } from "../services/settings"
import GoogleMap from "../components/ui/map/googleMap"
import Breadcrumbs from "../components/ui/breadcrumbs/breadcrumbs"
import BreadcrumbsItem from "../components/ui/breadcrumbs/breadcrumbsItem"

const MemberPage = () => {
  let { memberId } = useParams()
  const [member, setMember] = useState()

  useEffect(() => {
    setMember({ ...getMember(memberId) })
  }, [memberId])

  const toggleFavoriteHandler = (id) => {
    toggleFavorite(id)
    setMember({ ...getMember(memberId) })
  }

  return (
    <>
      <div>
        {member && (
          <>
            <div>
              <Breadcrumbs>
                <BreadcrumbsItem href="/">Главная</BreadcrumbsItem>
                <BreadcrumbsItem href={"/member/" + member.id} active>
                  {member.name} {member.lastName}
                </BreadcrumbsItem>
              </Breadcrumbs>
            </div>
            <h1 className="pb-3 mb-5 border-bottom">
              {member.name} {member.lastName}
              <Button customCss="mt-auto ms-2" type="button" handleClick={() => toggleFavoriteHandler(member.id)}>
                {member.favorite ? "Удалить из избранных" : "Добавить в избранное"}
              </Button>
            </h1>
            <img src={member.photo} className="rounded float-end w-25 m-2" alt={`${member.name} ${member.lastName}`} />
            <div className="mb-3 row border-bottom pb-2">
              <div className="col-sm-2">Возраст:</div>
              <div className="col-sm-10">{calcAge(member.birthYear)}</div>
            </div>
            <div className="mb-3 row border-bottom pb-2">
              <div className="col-sm-2">О себе:</div>
              <div className="col-sm-10">{member.about}</div>
            </div>
            <div className="mb-3 row border-bottom pb-2">
              <div className="col-sm-2">Социальные сети:</div>
              <div className="col-sm-10">
                {member.social.map((item, i) => (
                  <Button
                    key={i}
                    type="button"
                    color="link"
                    handleClick={() => {
                      window.location.href = item.url
                    }}
                    customCss="ms-2 mb-2">
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mb-3 row border-bottom pb-2">
              <div className="col-sm-2">Чем занимался в разработке данного проекта:</div>
              <div className="col-sm-10">{member.whatDidInThisProject}</div>
            </div>
            <div className="mb-3 row border-bottom pb-2">
              <div className="col-sm-2">Город:</div>
              <div className="col-sm-10">{member.location}</div>
            </div>
            {member.location && (
              <div className="mb-3 row border-bottom pb-2">
                <GoogleMap apiKey={settings.googleApiKey} query={member.location} />
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default MemberPage
