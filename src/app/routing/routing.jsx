import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Navbar from "../components/ui/navbar/navbar"
import ExamplesPage from "../layouts/examplesPage"
import FavoritesPage from "../layouts/favoritesPage"
import MainPage from "../layouts/mainPage"
import MemberPage from "../layouts/memberPage"
import page404 from "../layouts/page404"

const Routing = () => {
  const menu = [
    { title: "Home", link: "/" },
    { title: "Favorites", link: "/favorites" },
    { title: "Examples", link: "/examples" },
  ]

  return (
    <Router>
      <Navbar menu={menu} />
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
