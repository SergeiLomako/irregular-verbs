import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { TYPES } from "../../../env";

const types = {
  infinite: 'Infinite:',
  pastSimple: 'Past Simple:',
  pastParticiple: 'Past Participle:',
  verb: 'Verb'
};

export const Type = ({ type, answer, sound, onBlur, onChange, value, icon, readOnly, longInput }) => (
  <div className="verb-form d-flex align-items-center justify-content-start w-100">
    <span className="verb-elem-text verb-elem-type text-left">{ types[type] }</span>
    <Form.Control type="text"
                  readOnly={readOnly}
                  className={`border-primary answer-input ${longInput ? 'long' : 'short'}-input align-center`}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
    />
    { answer && icon }
    { sound }
  </div>
);

Type.propTypes = {
  type: PropTypes.oneOf(TYPES).isRequired,
  answer: PropTypes.bool,
  sound: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element
  ]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element
  ]),
  longInput: PropTypes.bool
};

Type.defaultProps = {
  answer: false,
  sound: false,
  onBlur: () => {},
  onChange: () => {},
  icon: false,
  readOnly: false,
  longInput: false
};
