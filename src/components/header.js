import React from "react"
import { Nav, Navbar } from "react-bootstrap"
export default function Header() {
  return (
    <Navbar expand="lg" className="px-lg-5">
      <Navbar.Toggle aria-controls="site-navbar-nav" />
      <Navbar.Brand href="#home">YAMDB api</Navbar.Brand>
      <Navbar.Collapse id="site-navbar-nav" className="justify-content-end">
        <Nav className="mr-0">
          <Nav.Link href="/documentation">Documentation</Nav.Link>
          <Nav.Link href="/getkey">GET FREE API KEY</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
