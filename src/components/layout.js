import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <Container fluid className="px-0">
      <Row noGutters className="justify-content-center">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <main>{children}</main>
        </Col>
      </Row>
      <Row noGutters className="justify-content-center">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}
