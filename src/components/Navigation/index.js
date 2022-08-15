import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({ pages, currentPage, setCurrentPage }) {
  return (
    <Navbar expand='md' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#">cmskorcz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { pages.map(page => (
              <Nav.Link href={`#${page.name}`} key={page.name}>{page.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;