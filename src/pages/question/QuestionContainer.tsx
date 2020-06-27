import * as React from 'react';
import QuestionPresenter from './QuestionPresenter';

export interface IQuestionContainerProps {
}

export interface IQuestionContainerState {
}

export default class QuestionContainer extends React.Component<IQuestionContainerProps, IQuestionContainerState> {
  constructor(props: IQuestionContainerProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <>
        <QuestionPresenter /> 
      </>
    );
  }
}
