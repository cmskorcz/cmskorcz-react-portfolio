import React from "react";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Portfolio({ projects }) {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {projects.map(project => (
          <Col key={`${project.title}`}>
            <Card>
              <Card.Img variant="top" style={{ objectFit: 'cover', height: '18rem', objectPosition: '0% 0%' }} src={require(`../../assets/images/${project.img}`)} alt={`${project.title}`}/>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Link href={`${project.link}`} target="_blank" rel="noreferrer">Click to Visit Site</Card.Link>
                <Card.Link href={`${project.repo}`} target="_blank" rel="noreferrer">Click to Visit Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Portfolio;