import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

function About() {
  return (
    <Container className="align-self-center mt-3 mt-md-0" id="about">
      <Row>
        <Col xs={12} md={4} lg={3} className="d-flex justify-content-center mb-3"><img src={require('../../assets/images/chase-profile-small.jpeg')} alt='Chase Skorczewski' className="border border-dark"/></Col>
        <Col xs={12} md={8} lg={9} >
          <h2>About Me</h2>
          <p>
            Hi there! My name is Chase Skorczewski, and I am a Michigan State University Coding Bootcamp student. I have a passion for helping others, which lead me to become a paramedic. My goal is to use my knowledge of the medical field to eventually develop systems to better streamline patient care.
          </p>
          <p>
            My interests in the coding field include: Front-End, Back-End, Data Analysis, and Internet of Things. After finishing my bootcamp in web development, my next pursuit will be to learn Python.
          </p>    
        </Col>
      </Row>
    </Container>
  )
}

export default About;