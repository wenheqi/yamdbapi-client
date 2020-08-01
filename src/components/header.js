import React, { useRef } from "react"
import { Nav, Navbar } from "react-bootstrap"
export default function Header() {
  const contactEl = useRef(null)
  const contactOnClick = e => {
    // `current` points to the mounted anchor element
    contactEl.current.href = `mailto:${atob(contactEl.current.href.slice(7))}`
  }

  return (
    <Navbar expand="lg" className="px-lg-5">
      <Navbar.Toggle aria-controls="site-navbar-nav" />
      <Navbar.Brand href="/">
        <span role="img" aria-label="logo">
          🍠
        </span>
        {` `}YamDB
      </Navbar.Brand>
      <Navbar.Collapse id="site-navbar-nav" className="justify-content-end">
        <Nav className="mr-0">
          <Nav.Link href="/documentation">Documentation</Nav.Link>
          <Nav.Link
            ref={contactEl}
            href="mailto:d2VuaGUucWlAb3V0bG9vay5jb20="
            onClick={contactOnClick}
          >
            Contact
          </Nav.Link>
          <Nav.Link href="/getkey">Get Free API Key</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
