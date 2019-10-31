import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { getNextVerb } from '../../helpers/getNextVerb';
import VerbType from './VerbType';
import { MAX_VERB_TITLE_SIZE } from '../../env';

export default () => {
  const { setNextVerb, currentVerb, verbs, shownVerbs } = useContext(StoreContext);
  const handleNextButtonClick = (e) => {
    e.preventDefault();
    return setNextVerb(getNextVerb(verbs, shownVerbs))
  };
  const style = currentVerb.title.length > MAX_VERB_TITLE_SIZE
    ? { fontSize: '20px' }
    : {};
  return (
    <Container className="d-flex align-items-center flex-column">
      <Row>
        <Card className="text-center"
              id="verb-card"
              border="primary"
        >
          <Card.Header id="card-header" className="d-flex align-items-center justify-content-center">
            <span id="current-verb" className="text-uppercase text-center" style={style}>{ currentVerb.title }</span>
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