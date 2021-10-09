import React from "react"
import ExampleNavBar from "./examples/exampleNavbar"
import ExampleProgress from "./examples/exampleProgress"
import ExampleButton from "./examples/exampleButton"
import ExampleBreadcrumbs from "./examples/exampleBreadcrumbs"
import ExampleBadge from "./examples/exampleBage"
import ExampleSlider from "./examples/exampleSlider"
import ExampleMemberCard from "./examples/exampleMemberCard"
import Breadcrumbs from "../components/ui/breadcrumbs/breadcrumbs"
import BreadcrumbsItem from "../components/ui/breadcrumbs/breadcrumbsItem"
import ExampleGoogleMap from "./examples/exampleGoogleMap"

const ExamplesPage = () => {
  return (
    <>
      <div>
        <Breadcrumbs>
          <BreadcrumbsItem href="/">Главная</BreadcrumbsItem>
          <BreadcrumbsItem href="/" active>
            Examples
          </BreadcrumbsItem>
        </Breadcrumbs>
      </div>
      <div>
        <ExampleNavBar />
        <ExampleProgress />
        <ExampleButton />
        <ExampleMemberCard />
        <ExampleBreadcrumbs />
        <ExampleBadge />
        <ExampleSlider />
        <ExampleGoogleMap />
      </div>
    </>
  )
}

export default ExamplesPage
