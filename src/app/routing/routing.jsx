import React from "react"
import { NavItem } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "../components/ui/navbar/navbar"
import NavbarItem from "../components/ui/navbar/navbarItem"
import ExamplesPage from "../layouts/examplesPage"
import FavoritesPage from "../layouts/favoritesPage"
import MainPage from "../layouts/mainPage"
import MemberPage from "../layouts/memberPage"
import page404 from "../layouts/page404"

const Routing = () => {
  const menu = [
    { title: "Главная", href: "/" },
    { title: "Избранные", href: "/favorites" },
    { title: "Примеры", href: "/examples" },
  ]

  return (
    <Router>
      <Navbar title="Group4">
        {menu.map((item, i) => (
          <NavbarItem key={i} name={item.title} href={item.href} />
        ))}
      </Navbar>
      <div className="container py-3">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/member/:memberId" component={MemberPage} />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/examples" component={ExamplesPage} />
          <Route path="*" component={page404} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routing
