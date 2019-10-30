import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { getNextVerb } from '../../helpers/getNextVerb';
import VerbType from './VerbType';

export default () => {
  const { setNextVerb, currentVerb, verbs, shownVerbs } = useContext(StoreContext);
  const handleNextButtonClick = (e) => {
    e.preventDefault();
    return setNextVerb(getNextVerb(verbs, shownVerbs))
  };
  return (
    <Container className="d-flex align-items-center flex-column mt-5" id="content">
      <Row>
        <Card className="text-center"
              id="verb-card"
              border="primary"
        >
          <Card.Header>
            <span id="current-verb" className="text-uppercase">{ currentVerb.title }</span>
          </Card.Header>
          <Card.Body className="d-flex align-items-center flex-column">
            <VerbType type="infinite" />
            <VerbType type="simplePast" />
            <VerbType type="pastParticiple" />
          </Card.Body>
          <Card.Footer>
            <Button variant="primary"
                    onClick={ handleNextButtonClick }
            >
              Next
            </Button>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  )
}
