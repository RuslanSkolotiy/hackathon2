import React from "react"
import Breadcrumbs from "../components/ui/breadcrumbs/breadcrumbs"
import BreadcrumbsItem from "../components/ui/breadcrumbs/breadcrumbsItem"

const MainPage = () => {
  return (
    <>
      <div>
        <Breadcrumbs>
          <BreadcrumbsItem href="/" active>Главная</BreadcrumbsItem>
        </Breadcrumbs>
      </div>
      <div>Main page content</div>
    </>
  )
}

export default MainPage
