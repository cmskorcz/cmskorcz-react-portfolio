import React from "react";
import Container from "react-bootstrap/Container"

function Portfolio({ projects }) {
  return (
    <Container>
      <ul className="mb-5">
        {projects.map(project => (
          <li key={`${project.title}`}>
            <img src={require(`../../assets/images/${project.img}`)} alt={`${project.title}`} />
            <a href={`${project.link}`} target="_blank" rel="noreferrer">{project.title}</a>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Portfolio;