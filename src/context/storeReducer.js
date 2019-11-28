import {
  TOGGLE_VERBS_LIST_VISIBILITY,
  TOGGLE_ANSWER_VISIBILITY,
  SET_CORRECT_ANSWER_FLAG,
  SET_EXAM_NEXT_VERB,
  SET_SEARCH_VALUE,
  SET_TOUCHED_FLAG,
  SET_ANSWER_VALUE,
  SET_NEXT_VERB,
  RESET_STATE,
  FINISH_EXAM,
  SET_VERB,
} from './types'
import initialState from './initialState';
import {generateRandomVisibleType, getRandomInt} from '../helpers/getNextVerb';

const resetAnswers = {
  answers: {
    verb: '',
    infinite: '',
    pastSimple: '',
    pastParticiple: ''
  }
};

const resetCorrectAnswers = {
  isCorrectAnswers: {
    verb: false,
    infinite: false,
    pastSimple: false,
    pastParticiple: false
  }
};

const generateShownVerbsArray = (state, nextVerb) => state.shownVerbs.length === state.verbs.length
  ? [nextVerb.verb]
  : [...state.shownVerbs, nextVerb.verb];

const generateRightAnswerPoints = (isCorrectAnswers, visibleType) => Object.keys(isCorrectAnswers)
  .filter(answerType => answerType !== visibleType && isCorrectAnswers[answerType])
  .length;


const handlers = {
  [SET_NEXT_VERB]: (state, { payload: { nextVerb } }) => {
    return {
      ...state,
      ...resetAnswers,
      shownVerbs: generateShownVerbsArray(state, nextVerb),
      hasError: false,
      isVisibleAnswers: false,
      currentVerb: nextVerb
    }
  },
  [SET_EXAM_NEXT_VERB]: (
      { exam: { questionCount, points, visibleType }, isCorrectAnswers, ...state },
      { payload: { nextVerb } }
    ) => ({
      ...state,
      ...resetAnswers,
      exam: {
        questionCount: questionCount - 1,
        points: points + generateRightAnswerPoints(isCorrectAnswers, visibleType),
        visibleType: generateRandomVisibleType()
      },
      ...resetCorrectAnswers,
      shownVerbs: generateShownVerbsArray(state, nextVerb),
      currentVerb: nextVerb
    }),
  [FINISH_EXAM]: ({ exam: {points, visibleType}, isCorrectAnswers, ...state }) => {
    return {
      ...state,
      ...resetCorrectAnswers,
      exam: {
        points: points + generateRightAnswerPoints(isCorrectAnswers, visibleType),
        showResult: true
      },
    }
  },
  [TOGGLE_VERBS_LIST_VISIBILITY]: (state) => ({
    ...state,
    isVisibleList: !state.isVisibleList
  }),
  [TOGGLE_ANSWER_VISIBILITY]: (state) => ({
    ...state,
    isVisibleAnswers: !state.isVisibleAnswers
  }),
  [SET_VERB]: (state, { payload: { currentVerb } }) => ({
    ...state,
    ...resetAnswers,
    currentVerb,
    hasError: false,
    isVisibleAnswers: false,
    shownVerbs: [currentVerb.verb]
  }),
  [SET_SEARCH_VALUE]: (state, { payload: { search } }) => ({
    ...state,
    search
  }),
  [RESET_STATE]: ({ verbs }) => ({
    ...initialState,
    currentVerb: verbs[getRandomInt(verbs.length)],
    exam: {
      ...initialState.exam,
      visibleType: generateRandomVisibleType() }
  }),
  [SET_TOUCHED_FLAG]: (state, { payload: { type } }) => ({
    ...state,
    isTouched: {
      ...state.isTouched,
      [type]: true
    },
  }),
  [SET_ANSWER_VALUE]: (state, { payload: { type, value } }) => ({
    ...state,
    answers: {
      ...state.answers,
      [type]: value
    },
  }),
  [SET_CORRECT_ANSWER_FLAG]: (state, { payload: { type, value } }) => ({
    ...state,
    isCorrectAnswers: {
      ...state.isCorrectAnswers,
      [type]: value
    },
  }),
  DEFAULT: state => state
};

export const storeReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action)
};
