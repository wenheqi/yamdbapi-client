import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <Container fluid className={`min-vh-100 vh-100 px-0 d-flex flex-column`}>
      <Row noGutters className="justify-content-center">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row noGutters className="flex-grow-1">
        <Col>{children}</Col>
      </Row>
      <Row noGutters className="justify-content-center">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}
