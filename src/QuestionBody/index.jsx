import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const QuestionBody = ({ text, iconType }) => (
  <div className="question__body">
    <p className="question__text">
      {text}
    </p>
    <Icon type={iconType} />
  </div>
);

export default QuestionBody;