import React from "react";
import Card from "react-bootstrap/Card"

function Project({ title, link, repo, img }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Link href={`${link}`} target="_blank" rel="noreferrer">Click to Visit Site</Card.Link>
        <Card.Link href={`${repo}`} target="_blank" rel="noreferrer">Click to Visit Repo</Card.Link>
      </Card.Body>
      <Card.Img variant="bottom" style={{ objectFit: 'cover', height: '18rem', objectPosition: '0% 0%' }} src={require(`../../assets/images/${img}`)} alt={`${title}`}/>
    </Card>
  )
}

export default Project;