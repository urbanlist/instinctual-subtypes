import * as React from 'react';
import QuestionPresenter from './QuestionPresenter';
import QuestionItemTemplate, { IQuestionItemTemplateProps } from '../../templates/QuestionItemTemplate';
import QuestionItemComponent from '../../components/QuestionItemComponent';
import Questions from '../../Questions';

export interface IQuestionContainerProps {
  questionNumber: number,
}

export interface IQuestionContainerState {
  answerNumbers: number[],
  enable: boolean
}

export default class QuestionContainer extends React.Component<IQuestionContainerProps, IQuestionContainerState> {
  constructor(props: IQuestionContainerProps) {
    super(props)

    this.state = {
      answerNumbers: [0, 0, 0, 0],
      enable: true
    }
  }

  private clickAnswer(question: number, answer: number) {
    this.setState((state) => {
      state.answerNumbers[question] = answer;
      return state;
    });
  }

  public render() {
    return (
      <QuestionPresenter question={
        new QuestionItemTemplate({
          questionNumber: this.props.questionNumber,
          description: Questions[this.props.questionNumber - 1].description,
          enable: this.state.enable,
          questions: Questions[this.props.questionNumber - 1].subQuestions.map((subQuestion, index) => {
            return new QuestionItemComponent({
              questionNumber: index + 1,
              description: subQuestion.description,
              enable: this.state.enable,
              answerNumber: this.state.answerNumbers[index + 1],
              raiseAnswer: (answerNumber) => this.clickAnswer(index + 1, answerNumber)
            });
          })
        })
      }/> 
    );
  }
}
