import React, { useState } from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = ({ type, text, onSelected }) => {
  const [opt, setOpt] = useState(type);

  const handleClick = ({ target }) => {
    setOpt(target.value)
    onSelected(opt);
  }

  return (
    <div className="option" onClick={handleClick}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  )
};

export default Option;