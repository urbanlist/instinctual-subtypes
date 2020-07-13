import React from 'react';
import QuestionItemTemplate from "./QuestionItemTemplate"
import QuestionItemComponent from '../components/QuestionItemComponent';

export default {
  title: 'QuestionItemTemplate',
  component: QuestionItemTemplate,
};

export const QuestionItem = () => (
  <QuestionItemTemplate 
    questionNumber={1}
    description={"내게 중요한 것"}
    questions={[
      new QuestionItemComponent({
        questionNumber: 1,
        description: "나 자신의 기대에 부응하는 것",
        enable: true,
        answerNumber: 0,
      }), new QuestionItemComponent({
        questionNumber: 2,
        description: "세상에 영향력을 끼치는 것",
        enable: true,
        answerNumber: 0,
      }), new QuestionItemComponent({
        questionNumber: 3,
        description: "특별한 상대와 친밀감을 나누는 것",
        enable: true,
        answerNumber: 0,
      })]}
    enable={true}>
  </QuestionItemTemplate>
);
