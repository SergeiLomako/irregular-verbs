import React from "react";
import { FaEye } from "react-icons/fa";

const types = {
  infinite: 'Infinite',
  simplePast: 'Simple Past',
  pastParticiple: 'Past Participle'
};

export default (props) => {
  return (
    <div className="verb-form border border-primary rounded d-flex align-items-center justify-content-start w-100">
      <span className="verb-elem-text verb-elem-type text-left">{ `${types[props.type]}:` }</span>
      <span className="verb-elem-text verb-elem-answer">{ props.answer }</span>
      <FaEye className="verb-icon ml-auto" />
    </div>
  )
}
