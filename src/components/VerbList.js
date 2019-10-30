import React from "react";
import { Button, Navbar } from "react-bootstrap";

export default (props) => {
  return (
    <Navbar bg="light"
            variant="light"
            className="d-flex align-items-center justify-content-start flex-wrap"
            id="verb-list"
    >
      <Button variant="outline-primary" className="btn btn-sm verb-variant-item">
        Show verbs
      </Button>
    </Navbar>
  )
}
