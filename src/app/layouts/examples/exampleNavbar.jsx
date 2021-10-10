import React from "react"
import Navbar from "../../components/ui/navbar/navbar"
import NavbarItem from "../../components/ui/navbar/navbarItem"

const ExampleNavBar = () => {
  return (
    <div className="mb-5">
      <h2>NavBar</h2>
      <div>
        <Navbar title="Пример">
          <NavbarItem name="Меню 1" href="/menu1/" />
          <NavbarItem name="Меню 2" href="/menu1/" />
          <NavbarItem name="Меню 3" href="/menu1/" />
        </Navbar>
      </div>
    </div>
  )
}

export default ExampleNavBar
