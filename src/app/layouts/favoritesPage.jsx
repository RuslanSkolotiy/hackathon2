import React from "react"
import Breadcrumbs from "../components/ui/breadcrumbs/breadcrumbs"
import BreadcrumbsItem from "../components/ui/breadcrumbs/breadcrumbsItem"
const FavoritesPage = () => {
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
      <div>FavoritePage</div>
    </>
  )
}

export default FavoritesPage
