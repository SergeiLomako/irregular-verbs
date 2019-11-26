import React, {useReducer} from 'react'
import { StoreContext } from './storeContext'
import { storeReducer} from './storeReducer'
import { getRandomInt } from '../helpers/getNextVerb';
import verbs from './verbs';
import {
  TOGGLE_VERBS_LIST_VISIBILITY,
  TOGGLE_ANSWER_VISIBILITY,
  SET_CORRECT_ANSWER_FLAG,
  SET_TOUCHED_FLAG,
  SET_SEARCH_VALUE,
  SET_ANSWER_VALUE,
  SET_NEXT_VERB,
  SET_VERB
} from './types'

export const Store = ({children}) => {
  const headerRef = React.createRef();
  const currentVerb = verbs[getRandomInt(verbs.length)];
  const initialState = {
    verbs,
    headerRef,
    currentVerb,
    search: '',
    isVisibleList: false,
    answers: {
      infinite: '',
      pastSimple: '',
      pastParticiple: ''
    },
    isCorrectAnswers: {
      infinite: false,
      pastSimple: false,
      pastParticiple: false
    },
    isTouched: {
      infinite: false,
      pastSimple: false,
      pastParticiple: false
    },
    isVisibleAnswers: false,
    shownVerbs: [currentVerb.title]
  };
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const setNextVerb = (nextVerb) => dispatch({
    type: SET_NEXT_VERB,
    payload: { nextVerb }
  });

  const setVerb = (currentVerb) => dispatch({
    type: SET_VERB,
    payload: { currentVerb }
  });

  const setSearchValue = (search) => dispatch({
    type: SET_SEARCH_VALUE,
    payload: { search }
  });

  const setAnswerValue = (type, value) => dispatch({
    type: SET_ANSWER_VALUE,
    payload: { type, value }
  });

  const setCorrectAnswerFlag = (type, value) => dispatch({
    type: SET_CORRECT_ANSWER_FLAG,
    payload: { type, value }
  });

  const setTouchedFlag = (type) => dispatch({
    type: SET_TOUCHED_FLAG,
    payload: { type }
  });

  const toggleVerbsListVisibility = () => dispatch({ type: TOGGLE_VERBS_LIST_VISIBILITY });

  const toggleAnswerVisibility = () => dispatch({ type: TOGGLE_ANSWER_VISIBILITY });

  return (
    <StoreContext.Provider value={{
      ...state,
      toggleVerbsListVisibility,
      toggleAnswerVisibility,
      setCorrectAnswerFlag,
      setSearchValue,
      setAnswerValue,
      setTouchedFlag,
      setNextVerb,
      setVerb
    }}>
      {children}
    </StoreContext.Provider>
  )
};