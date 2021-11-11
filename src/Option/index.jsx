import React from 'react';
import Icon from '../Icon/index';
import './style.css';


const Option = ({ type, text, onSelected }) => {
  const answer = () => {
    console.log(text);
  }

  return (

    <>
      <div onClick={answer} className="option" >
        <Icon type={type} />
        <div>{text}</div>
      </div >
    </>
  );

}
export default Option;