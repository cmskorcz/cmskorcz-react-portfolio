import React from "react";
import Container from "react-bootstrap/Container"
import Navigation from "../Navigation";


function Header() {
  return (
    <>
    <h1 className="py-3 bg-dark text-light mb-0"><Container>CMSKORCZ Web-Development</Container></h1>
    <Navigation />
    </>
  )
}

export default Header;