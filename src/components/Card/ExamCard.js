import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { getNextVerb } from '../../helpers/getNextVerb';
import VerbType from './Type';

export default () => {
  const {
    setNextVerb,
    shownVerbs,
    verbs
  } = useContext(StoreContext);

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    return setNextVerb(getNextVerb(verbs, shownVerbs))
  };

  return (
    <Container className="d-flex align-items-center flex-column">
      <Row>
        <Card className="text-center"
              id="verb-card"
              border="primary"
        >
          <Card.Header id="card-header" className="d-flex align-items-center justify-content-center">
            <span id="current-verb" className="text-uppercase text-center">
              EXAM
            </span>
          </Card.Header>
          <Card.Body className="d-flex align-items-center flex-column">
            <VerbType type="verb" sound={false} answer={false} />
            <VerbType type="infinite" sound={false} answer={false} />
            <VerbType type="pastSimple" sound={false} answer={false} />
            <VerbType type="pastParticiple" sound={false} answer={false} />
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
