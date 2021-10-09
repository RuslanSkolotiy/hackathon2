import React from "react"
import MemberCard from "../../components/ui/memberCard/memberCard"
import { contributors } from "../../../data/data"

const ExampleMemberCard = () => {

  const addToFavourites = (id) => {
    console.log('addToFavourites', id)
  }

  const showContributor = (id) => {
    console.log('showContributor', id)
  }
  return (
    <div className="mb-5">
      <h2>MemberCard</h2>
      <div>
        <MemberCard {...contributors[0]} showContributor={showContributor} addToFavourites={addToFavourites} />
      </div>
    </div>
  )
}

export default ExampleMemberCard
