import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function Footer() {
  return (
    <Container fluid className="bg-dark pt-3 footer">
      <h2 className="text-light">Contact Information:</h2>
      <ListGroup variant="flush">
        <ListGroup.Item className="bg-dark text-light">Email: <a href="mailto:chaseskorey@gmail.com" className="text-reset">chaseskorey@gmail.com</a></ListGroup.Item>
        <ListGroup.Item className="bg-dark text-light">GitHub: <a href="https://github.com/cmskorcz" className="text-reset" target="_blank" rel="noreferrer">cmskorcz</a></ListGroup.Item>
        <ListGroup.Item className="bg-dark text-light">LinkedIn: <a href="https://www.linkedin.com/in/chase-skorczewski/" className="text-reset" target="_blank" rel="noreferrer">Chase Skorczewski</a></ListGroup.Item>
      </ListGroup>
    </Container>
  )
}

export default Footer