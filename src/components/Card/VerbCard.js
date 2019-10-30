import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import VerbType from "./VerbType"

export default (props) => {
  return (
    <Container className="d-flex align-items-center flex-column mt-5" id="content">
      <Row>
        <Card className="text-center"
              id="verb-card"
              border="primary"
        >
          <Card.Header>
            <span id="current-verb">VERB</span>
          </Card.Header>
          <Card.Body className="d-flex align-items-center flex-column">
            <VerbType type="infinite" answer="Test123" />
            <VerbType type="simplePast" answer="Test1234" />
            <VerbType type="pastParticiple" answer="Test12345" />
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Next</Button>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  )
}
