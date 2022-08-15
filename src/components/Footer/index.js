import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <h1 className="text-light">Footer</h1>
      </Container>
    </Navbar>
  )
}

export default Footer