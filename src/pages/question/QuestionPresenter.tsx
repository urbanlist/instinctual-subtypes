import * as React from 'react';
import { IQuestionItemTemplateProps } from '../../templates/QuestionItemTemplate';

export interface IQuestionPresenterProps {
  question: React.Component<IQuestionItemTemplateProps>
}

export default class QuestionPresenter extends React.Component<IQuestionPresenterProps> {
  public render() {
    return this.props.question.render();
  }
}
