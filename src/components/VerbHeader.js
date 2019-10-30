import React from "react";
import { Button, Navbar } from "react-bootstrap";
import logo from "../logo.png";

export default (props) => {
  return (
    <Navbar bg="light" variant="light" className="d-flex align-items-center flex-column">
      <Navbar.Brand>
        <img
          alt="logo"
          src={logo}
          className="align-center"
        />
        <span className="ml-2 font-italic align-center"
              id="header-text">
              Learning irregular verbs
            </span>
      </Navbar.Brand>
      <Button variant="outline-primary" type="button">
        Show verbs
      </Button>
    </Navbar>
  )
}
