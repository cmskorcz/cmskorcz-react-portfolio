import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { capitalizeFirstLetter } from "../../util/helpers";

function Navigation(props) {
  const {
    pages = [],
    currentPage,
    setCurrentPage
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name)
  })
  return (
    <Navbar expand='md' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="/" className="d-none d-md-inline">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { pages.map(page => (
              <Nav.Link key={page.name} onClick={() => setCurrentPage(page)}>{capitalizeFirstLetter(page.name)}</Nav.Link>
            ))}
            <Nav.Link key="resume" href="/static/resume.pdf" download="cmskorcz_resume.pdf">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;