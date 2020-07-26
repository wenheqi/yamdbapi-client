import React from "react"
import { Nav, Navbar } from "react-bootstrap"
export default function Header() {
  return (
    <Navbar expand="lg" className="px-lg-5">
      <Navbar.Toggle aria-controls="site-navbar-nav" />
      <Navbar.Brand href="#home">YAMDB api</Navbar.Brand>
      <Navbar.Collapse id="site-navbar-nav" className="justify-content-end">
        <Nav className="mr-0">
          <Nav.Link href="/getkey">Get a Key</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/translate">Translate</Nav.Link>
          <Nav.Link href="/theme">Theme</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
