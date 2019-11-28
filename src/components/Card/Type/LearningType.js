import React, { useContext, useEffect, useState } from 'react';
import { FaCheck, FaVolumeUp } from 'react-icons/fa';
import { GoX } from 'react-icons/go';
import { Type } from "./Type";
import { getSound, rewriteSound } from '../../../helpers/sounds';
import { StoreContext } from '../../../context/storeContext';
import PropTypes from "prop-types";
import {TYPES} from "../../../env";


export const LearningType = ({ type }) => {
  const {
    setCorrectAnswerFlag,
    isCorrectAnswers,
    setTouchedFlag,
    setAnswerValue,
    currentVerb,
    answers,
  } = useContext(StoreContext);

  const [soundUrl, setSoundUrl] = useState(null);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    getSound(currentVerb[type])
      .then(blob => setSoundUrl(URL.createObjectURL(blob)))
  }, [currentVerb, type]);

  const handleBlur = () => {
    if (answers[type]) {
      setTouchedFlag(type)
    }
  };

  const handleSoundClick = async () => {
    if (soundUrl) {
      setIsPlay(true);
      const tmp = new Audio(soundUrl);
      tmp.play()
        .then(() => setIsPlay(false))
        .catch(() => {
          rewriteSound(currentVerb[type]).then(blob => {
            const url = URL.createObjectURL(blob);
            setSoundUrl(url);
            const tmp = new Audio(url);
            tmp.play().then(() => setIsPlay(false))
          })
        });
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setAnswerValue(type, value);
    setCorrectAnswerFlag(type, currentVerb[type] === value.toLowerCase())
  };

  const icon = isCorrectAnswers[type]
    ? <FaCheck className={`verb-icon ml-1 text-success ${!answers[type] && 'd-none'}`} />
    : <GoX className={`verb-icon ml-1 text-warning ${!answers[type] && 'd-none'}`} />;

  const soundIcon = <FaVolumeUp className={`ml-auto text-${isPlay ? 'warning' : 'primary' }`}
              onClick={handleSoundClick}
  />;
  return (
    <Type onChange={handleChange}
          onBlur={handleBlur}
          type={type}
          sound={soundIcon}
          icon={icon}
          answer={true}
          value={answers[type]}
    />
  )
};

LearningType.propTypes = {
  type: PropTypes.oneOf(TYPES),
};
