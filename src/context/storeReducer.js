import {
  TOGGLE_VERBS_LIST_VISIBILITY,
  CHANGE_TYPE_VISIBILITY,
  SET_VERB_FROM_LIST,
  SET_NEXT_VERB
} from './types'

const handlers = {
  [SET_NEXT_VERB]: (state, { payload: { nextVerb } }) => {
    const shownVerbs = state.shownVerbs.length === state.verbs.length
      ? [nextVerb.title]
      : [...state.shownVerbs, nextVerb.title];
    return {
      ...state,
      shownVerbs,
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
  [SET_VERB_FROM_LIST]: (state, { payload: { currentVerb } }) => ({
    ...state,
    currentVerb,
    isShowTypes: {
      infinite: false,
      simplePast: false,
      pastParticiple: false
    },
    shownVerbs: [currentVerb.title]
  }),
  DEFAULT: state => state
};

export const storeReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action)
};
