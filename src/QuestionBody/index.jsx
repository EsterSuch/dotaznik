import React from 'react';

import './style.css';



const QuestionBody = ({ text, iconType }) => (
  <div className="question__body">
    <p className="question__text">
      {text}
    </p>
    type={iconType}
  </div>
);

export default QuestionBody;