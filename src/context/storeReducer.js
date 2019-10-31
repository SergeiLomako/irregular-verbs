import {
  TOGGLE_VERBS_LIST_VISIBILITY,
  SET_CORRECT_ANSWER_FLAG,
  CHANGE_TYPE_VISIBILITY,
  SET_SEARCH_VALUE,
  SET_TOUCHED_FLAG,
  SET_ANSWER_VALUE,
  SET_NEXT_VERB,
  SET_VERB,
} from './types'


const resetAnswers = {
  answers: {
    infinite: '',
    simplePast: '',
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
      isShowTypes: {
        infinite: false,
        simplePast: false,
        pastParticiple: false
      },
      currentVerb: nextVerb
    }
  },
  [TOGGLE_VERBS_LIST_VISIBILITY]: ({ isVisibleList, ...rest }) => ({
    ...rest,
    isVisibleList: !isVisibleList
  }),
  [CHANGE_TYPE_VISIBILITY]: (state, { payload: { verbType } }) => ({
    ...state,
    isShowTypes: {
      ...state.isShowTypes,
      [verbType]: !state.isShowTypes[verbType]
    }
  }),
  [SET_VERB]: (state, { payload: { currentVerb } }) => ({
    ...state,
    ...resetAnswers,
    currentVerb,
    hasError: false,
    isShowTypes: {
      infinite: false,
      simplePast: false,
      pastParticiple: false
    },
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
