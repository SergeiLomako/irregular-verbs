import React from "react";
import verbs from './verbs';
import { generateRandomVisibleType, getRandomInt } from "../helpers/getNextVerb";

const headerRef = React.createRef();
const currentVerb = verbs[getRandomInt(verbs.length)];

export default {
  verbs,
  headerRef,
  currentVerb,
  search: '',
  isVisibleList: false,
  answers: {
    verb: '',
    infinite: '',
    pastSimple: '',
    pastParticiple: ''
  },
  isCorrectAnswers: {
    verb: false,
    infinite: false,
    pastSimple: false,
    pastParticiple: false
  },
  isTouched: {
    infinite: false,
    pastSimple: false,
    pastParticiple: false
  },
  exam: {
    questionCount: 9,
    points: 0,
    visibleType: generateRandomVisibleType(),
    showResult: false
  },
  isVisibleAnswers: false,
  shownVerbs: [currentVerb.verb]
};
