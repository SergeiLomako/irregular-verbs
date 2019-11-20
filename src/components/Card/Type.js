import React, { useContext, useEffect, useState } from 'react';
import { FaCheck, FaVolumeUp } from 'react-icons/fa';
import { GoX } from 'react-icons/go';
import { Form } from 'react-bootstrap';
import { getSound, rewriteSound } from '../../helpers/sounds';
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

  const [soundUrl, setSoundUrl] = useState(null);

  useEffect(() => {
    getSound(currentVerb[type])
      .then(blob => {
        setSoundUrl(URL.createObjectURL(blob))
      })
  }, [currentVerb, type]);

  const handleBlur = () => {
    if (answers[type]) {
      setTouchedFlag(type)
    }
  };

  const handleSoundClick = async () => {
    if (soundUrl) {
      const tmp = new Audio(soundUrl);
      tmp.play()
        .catch(() => {
          rewriteSound(currentVerb[type])
            .then(blob => {
              const url = URL.createObjectURL(blob);
              setSoundUrl(url);
              const tmp = new Audio(url);
              tmp.play()
            })
        });
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
                    className={`border-${inputBorderColor} answer-input align-center`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={answers[type]}
      />
      {icon}
      <FaVolumeUp className="ml-auto text-primary"
                  onClick={handleSoundClick}
      />
    </div>
  )
}
