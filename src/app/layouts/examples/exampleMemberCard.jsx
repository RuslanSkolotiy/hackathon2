import React from "react"
import MemberCard from "../../components/ui/memberCard/memberCard"
import { getMember } from "../../services/members"

const ExampleMemberCard = () => {
  return (
    <div className="mb-5">
      <h2>MemberCard</h2>
      <div>
        <MemberCard {...getMember(1)} toggleFavoriteHandler={() => {}} showMember={() => {}} />
      </div>
    </div>
  )
}

export default ExampleMemberCard
