import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { getNextVerb } from '../../helpers/getNextVerb';
import { ExamType } from './Type/ExamType';
import { TYPES, MAX_RESULT } from '../../env';

export default () => {
  const {
    setExamNextVerb,
    shownVerbs,
    finishExam,
    resetState,
    verbs,
    exam: { showResult, questionCount, points }
  } = useContext(StoreContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (!showResult) {
      questionCount > 1
       ? setExamNextVerb(getNextVerb(verbs, shownVerbs))
       : finishExam()
    } else {
      resetState();
    }
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
            { showResult
              ? <>
                  <span className="text-primary text-uppercase mb-2">
                    your result:
                  </span>
                  <span className={`text-${points > MAX_RESULT / 2 ? 'success' : 'warning'}`}>
                    { `${points} / ${MAX_RESULT}` }
                  </span>
                </>
              : TYPES.map((type, index) => <ExamType key={index} type={type} />)
            }
          </Card.Body>
          <Card.Footer>
            <Button variant="primary"
                    onClick={ handleClick }
            >
              { questionCount ? 'Next' : 'Try again' }
            </Button>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  )
}

