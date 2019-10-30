import React, { useContext } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { StoreContext } from '../../context/storeContext';

const types = {
  infinite: 'Infinite:',
  simplePast: 'Simple Past:',
  pastParticiple: 'Past Participle:'
};

export default ({ type }) => {
  const { changeTypeVisibility, isShowTypes, currentVerb } = useContext(StoreContext);
  const iconClasses = 'verb-icon ml-auto';
  const answerClasses = `verb-elem-text verb-elem-answer ${ !isShowTypes[type] && 'd-none' }`;
  const handleClick = () => changeTypeVisibility(type);
  return (
    <div className="verb-form border border-primary rounded d-flex align-items-center justify-content-start w-100">
      <span className="verb-elem-text verb-elem-type text-left">{ types[type] }</span>
      <span className={answerClasses}>{ currentVerb[type] }</span>
      {isShowTypes[type] ?
        <FaEyeSlash className={iconClasses} onClick={ handleClick } /> :
        <FaEye className={iconClasses} onClick={ handleClick } />
      }
    </div>
  )
}
