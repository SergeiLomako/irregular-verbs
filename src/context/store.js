import React, {useReducer} from 'react'
import { StoreContext } from './storeContext'
import { storeReducer} from './storeReducer'
import initialState from './initialState'
import {
  TOGGLE_VERBS_LIST_VISIBILITY,
  TOGGLE_ANSWER_VISIBILITY,
  SET_CORRECT_ANSWER_FLAG,
  SET_EXAM_NEXT_VERB,
  SET_TOUCHED_FLAG,
  SET_SEARCH_VALUE,
  SET_ANSWER_VALUE,
  SET_NEXT_VERB,
  FINISH_EXAM,
  RESET_STATE,
  SET_VERB
} from './types'

export const Store = ({children}) => {

  const [state, dispatch] = useReducer(storeReducer, initialState);

  const actionCreators = {
    setNextVerb: (nextVerb) => dispatch({
      type: SET_NEXT_VERB,
      payload: { nextVerb }
    }),
    setExamNextVerb: (nextVerb) => dispatch({
      type: SET_EXAM_NEXT_VERB,
      payload: { nextVerb }
    }),
    finishExam: () => dispatch({ type: FINISH_EXAM }),
    setVerb: (currentVerb) => dispatch({
      type: SET_VERB,
      payload: { currentVerb }
    }),
    setSearchValue: (search) => dispatch({
      type: SET_SEARCH_VALUE,
      payload: { search }
    }),
    setAnswerValue: (type, value) => dispatch({
      type: SET_ANSWER_VALUE,
      payload: { type, value }
    }),
    setCorrectAnswerFlag: (type, value) => dispatch({
      type: SET_CORRECT_ANSWER_FLAG,
      payload: { type, value }
    }),
    setTouchedFlag: (type) => dispatch({
      type: SET_TOUCHED_FLAG,
      payload: { type }
    }),
    resetState: () => dispatch({ type: RESET_STATE }),
    toggleVerbsListVisibility: () => dispatch({ type: TOGGLE_VERBS_LIST_VISIBILITY }),
    toggleAnswerVisibility: () => dispatch({ type: TOGGLE_ANSWER_VISIBILITY })
  };

  return (
    <StoreContext.Provider value={{
      ...state,
      ...actionCreators
    }}>
      {children}
    </StoreContext.Provider>
  )
};
