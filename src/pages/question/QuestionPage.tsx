import * as React from 'react';
import QuestionContainer from './QuestionContainer';

export interface IQuestionPageProps {
}

export default class QuestionPage extends React.Component<IQuestionPageProps> {
  public render() {
    return (
      <div>
        <QuestionContainer/>
      </div>
    );
  }
}
