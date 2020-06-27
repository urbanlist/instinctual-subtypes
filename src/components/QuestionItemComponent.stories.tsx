import React from 'react';
import QuestionItemComponent from "./QuestionItemComponent"

export default {
  title: 'QuestionItemComponent',
  component: QuestionItemComponent,
};

export const QuestionItem = () => (
  <QuestionItemComponent 
    questionNumber={1}
    description={"설명"}
    answerNumber={1}
    enable={true}>
  </QuestionItemComponent>
);
