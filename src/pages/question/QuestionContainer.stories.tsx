import React from 'react';
import QuestionContainer from "./QuestionContainer"
import QuestionItemTemplate from '../../templates/QuestionItemTemplate';
import QuestionItemComponent from '../../components/QuestionItemComponent';

export default {
    title: 'QuestionContainer',
    component: QuestionContainer,
  };
  
  export const QuestionItem = () => (
    <QuestionContainer questionNumber={1}>
    </QuestionContainer>
  );