import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function Footer() {
  return (
    <Container fluid className="bg-dark pt-3">
      <h2 className="text-light">Contact Information:</h2>
      <ListGroup variant="flush">
        <ListGroup.Item className="bg-dark text-light">Email: <a href="mailto:chaseskorey@gmail.com" className="text-reset">chaseskorey@gmail.com</a></ListGroup.Item>
        <ListGroup.Item className="bg-dark text-light pb-3">GitHub: <a href="https://github.com/cmskorcz" className="text-reset" target="_blank" rel="noreferrer">cmskorcz</a></ListGroup.Item>
        
      </ListGroup>
    </Container>
  )
}

export default Footer