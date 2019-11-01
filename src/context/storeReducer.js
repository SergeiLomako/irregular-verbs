import {
  TOGGLE_VERBS_LIST_VISIBILITY,
  TOGGLE_ANSWER_VISIBILITY,
  SET_CORRECT_ANSWER_FLAG,
  SET_SEARCH_VALUE,
  SET_TOUCHED_FLAG,
  SET_ANSWER_VALUE,
  SET_NEXT_VERB,
  SET_VERB,
} from './types'


const resetAnswers = {
  answers: {
    infinite: '',
    pastSimple: '',
    pastParticiple: ''
  }
};

const handlers = {
  [SET_NEXT_VERB]: (state, { payload: { nextVerb } }) => {
    const shownVerbs = state.shownVerbs.length === state.verbs.length
      ? [nextVerb.title]
      : [...state.shownVerbs, nextVerb.title];
    return {
      ...state,
      ...resetAnswers,
      shownVerbs,
      hasError: false,
      isVisibleAnswers: false,
      currentVerb: nextVerb
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
    shownVerbs: [currentVerb.title]
  }),
  [SET_SEARCH_VALUE]: (state, { payload: { search } }) => ({
    ...state,
    search
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
