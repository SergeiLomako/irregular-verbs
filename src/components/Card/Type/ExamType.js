import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TYPES } from "../../../env";
import { StoreContext } from '../../../context/storeContext';
import {Type} from "./Type";

export const ExamType = ({ type }) => {
  const {
    setCorrectAnswerFlag,
    setAnswerValue,
    currentVerb,
    answers,
    exam: { visibleType }
  } = useContext(StoreContext);

  const handleChange = (e) => {
    const { value } = e.target;
    setAnswerValue(type, value);
    setCorrectAnswerFlag(type, currentVerb[type].includes(value.toLowerCase()))
  };

  const isVisible = type === visibleType;
  return (
    <Type onChange={handleChange}
          type={type}
          readOnly={isVisible}
          longInput={true}
          value={isVisible ? currentVerb[type] : answers[type]}
    />
  )
};

ExamType.propTypes = {
  type: PropTypes.oneOf(TYPES),
};


