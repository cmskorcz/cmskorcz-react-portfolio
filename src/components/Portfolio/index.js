import React from "react";
import Container from "react-bootstrap/Container"

function Portfolio({ projects }) {
  return (
    <Container>
      <ul>
        {projects.map(project => (
          <li>
            <a href={`${project.link}`} target="_blank" rel="noreferrer" key={project.title}>{project.title}</a>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Portfolio;