import React from "react"
import { Nav, Navbar } from "react-bootstrap"
export default function Header() {
  return (
    <Navbar expand="lg" className="px-lg-5">
      <Navbar.Toggle aria-controls="site-navbar-nav" />
      <Navbar.Brand href="/">🍠{` `}YamDB</Navbar.Brand>
      <Navbar.Collapse id="site-navbar-nav" className="justify-content-end">
        <Nav className="mr-0">
          <Nav.Link href="/documentation">Documentation</Nav.Link>
          <Nav.Link href="/getkey">Get Free API Key</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
