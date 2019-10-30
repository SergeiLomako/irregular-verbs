import React, {useReducer} from 'react'
import { StoreContext } from './storeContext'
import { storeReducer} from './storeReducer'
import { getRandomInt } from '../helpers/getNextVerb';
import verbs from './verbs';
import {
  TOGGLE_VERBS_LIST_VISIBILITY,
  CHANGE_TYPE_VISIBILITY,
  SET_VERB_FROM_LIST,
  SET_NEXT_VERB
} from './types'

export const Store = ({children}) => {
  const ref = React.createRef();
  const currentVerb = verbs[getRandomInt(verbs.length)];
  const initialState = {
    ref,
    verbs,
    currentVerb,
    isVisibleList: false,
    isShowTypes: {
      infinite: false,
      simplePast: false,
      pastParticiple: false
    },
    shownVerbs: [currentVerb.title]
  };
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const setNextVerb = (nextVerb) => dispatch({
    type: SET_NEXT_VERB,
    payload: { nextVerb }
  });

  const setVerbFromList = (currentVerb) => dispatch({
    type: SET_VERB_FROM_LIST,
    payload: { currentVerb }
  });

  const toggleVerbsListVisibility = () => dispatch({ type: TOGGLE_VERBS_LIST_VISIBILITY });

  const changeTypeVisibility = (verbType) => dispatch({
    type: CHANGE_TYPE_VISIBILITY,
    payload: { verbType }
  });

  return (
    <StoreContext.Provider value={{
      ...state,
      toggleVerbsListVisibility,
      changeTypeVisibility,
      setVerbFromList,
      setNextVerb
    }}>
      {children}
    </StoreContext.Provider>
  )
};
