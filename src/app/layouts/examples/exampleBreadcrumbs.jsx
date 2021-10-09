import React from "react"

import Breadcrumbs from "../../components/ui/breadcrumbs/breadcrumbs"
import BreadcrumbsItem from "../../components/ui/breadcrumbs/breadcrumbsItem"

const ExampleBreadcrumbs = () => {
  return (
    <div className="mb-5">
      <h2>Breadcrumbs</h2>
      <div>
        <Breadcrumbs>
          <BreadcrumbsItem href="/">Главная</BreadcrumbsItem>
          <BreadcrumbsItem href="/cat/">Каталог</BreadcrumbsItem>
          <BreadcrumbsItem href="/cat/item/" active>
            Товар
          </BreadcrumbsItem>
        </Breadcrumbs>
      </div>
    </div>
  )
}

export default ExampleBreadcrumbs
