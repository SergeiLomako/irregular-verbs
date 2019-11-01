import React, { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { GoX } from "react-icons/go";
import { Form } from 'react-bootstrap';
import { StoreContext } from '../../context/storeContext';

const types = {
  infinite: 'Infinite:',
  pastSimple: 'Past Simple:',
  pastParticiple: 'Past Participle:'
};

export default ({ type }) => {
  const {
    setCorrectAnswerFlag,
    isCorrectAnswers,
    setTouchedFlag,
    setAnswerValue,
    currentVerb,
    answers,
  } = useContext(StoreContext);

  const handleBlur = () => {
    if (answers[type]) {
      setTouchedFlag(type)
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setAnswerValue(type, value);
    setCorrectAnswerFlag(type, currentVerb[type] === value.toLowerCase())
  };

  let icon = null;
  let inputBorderColor = 'primary';

  if (answers[type] && isCorrectAnswers[type]) {
    icon = <FaCheck className="verb-icon ml-1 text-success" />;
    inputBorderColor = 'success';
  }

  if (answers[type] && !isCorrectAnswers[type]) {
    icon = <GoX className="verb-icon ml-1 text-warning" />;
    inputBorderColor = 'warning';
  }

  if (!answers[type]) {
    icon = null;
    inputBorderColor = 'primary'
  }

  return (
    <div className="verb-form d-flex align-items-center justify-content-start w-100">


      <span className="verb-elem-text verb-elem-type text-left">{ types[type] }</span>
      <Form.Control type="text"
                    className={`border-${inputBorderColor} answer-input`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={answers[type]}
      />
      {icon}
    </div>
  )
}
