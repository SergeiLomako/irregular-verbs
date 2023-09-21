import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { getNextVerb } from '../../helpers/getNextVerb';
import { LearningType } from './Type/LearningType';
import { MAX_VERB_TITLE_SIZE, TYPES } from '../../env';

export default () => {
  const {
    toggleAnswerVisibility,
    isVisibleAnswers,
    setNextVerb,
    currentVerb,
    shownVerbs,
    verbs
  } = useContext(StoreContext);

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    return setNextVerb(getNextVerb(verbs, shownVerbs))
  };

  const handleShowAnswerClick = (e) => {
    e.preventDefault();
    return toggleAnswerVisibility()
  };

  const style = currentVerb.verb.length > MAX_VERB_TITLE_SIZE
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
            <span id="current-verb" className="text-uppercase text-center" style={style}>{ currentVerb.verb }</span>
          </Card.Header>
          <Card.Body className="d-flex align-items-center flex-column">
            { TYPES.filter(type => type !== 'verb')
                .map((type, index) => <LearningType key={index} type={type} />)
            }
            <div id="answers-block">
              <Button variant="primary"
                      className="mt-2"
                      size="sm"
                      onClick={ handleShowAnswerClick }
              >
                { isVisibleAnswers ? 'Hide answers' : 'Show answers' }
              </Button>
              <div className="d-flex align-items-center justify-content-between mt-2">
                { isVisibleAnswers && (
                  <>
                    <span className="text-primary">{currentVerb.infinitive}</span>
                    <span className="text-primary">{currentVerb.pastSimple}</span>
                    <span className="text-primary">{currentVerb.pastParticiple}</span>
                  </>
                )}
              </div>
            </div>
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
