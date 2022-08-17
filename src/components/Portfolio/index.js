import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Project from "../Project";

function Portfolio({ projects }) {
  return (
    <Container className="my-3">
      <Row xs={1} md={2} className="g-4">
        {projects.map(project => (
          <Col key={`${project.title}`}>
            <Project title={ project.title } img={ project.img } repo={ project.rep } link={ project.link } />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Portfolio;