import React, { useState } from "react";
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ContactForm() {
  const [validated, setValidated] = useState(false)

  const handleValidation = (e) => {
    e.preventDefault()
    if (!e.target.value.length) {
      setValidated(false);
    } else {
      setValidated(true)
    }
  }

  return (
    <Container className="my-3">
      <h2>Contact Form</h2>
      <Row>
        <Col md={6}>
          <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control required type="text" placeholder="Enter Name" onBlur={handleValidation}/>
              <Form.Control.Feedback type="invalid">Please enter your name!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control required type="email" placeholder="Enter Email" onBlur={handleValidation} />
              <Form.Control.Feedback type="invalid">Please enter your email!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" required rows={5} onBlur={handleValidation} />
              <Form.Control.Feedback type="invalid">Please enter a message!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactForm;