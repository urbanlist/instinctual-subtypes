import * as React from 'react';

export interface IQuestionItemComponentProps {
  questionNumber: number;
  description: string;
  answerNumber: number;
  enable: boolean;

  raiseAnswer?: (answerNumber: number) => void;
}

export default class QuestionItemComponent extends React.Component<IQuestionItemComponentProps> {
  private clickAnswer(selectNum: number) {
    const { enable, raiseAnswer } = this.props;
    if (enable == false)
      return;
    
    raiseAnswer && raiseAnswer(selectNum);
  }

  public render() {
    const { 
      questionNumber,
      answerNumber,
      description,
      enable
    } = this.props;

    const buttons = [1, 2, 3, 4, 5].map(inputNumber => {
      return (
        <React.Fragment>
          <input
            id={`input-${questionNumber}-${inputNumber}`}
            type="radio"
            onClick={e => this.clickAnswer(inputNumber)}
            checked={answerNumber == inputNumber}
            onChange={e => null} />
          <label htmlFor={`input-${questionNumber}-${inputNumber}`}>
            
          </label>
        </React.Fragment>
      );
    })

    return (
      <div className="question-item"
        style={{ opacity: enable ? 1 : 0.1 }}
        aria-hidden={enable ? "false" : "true"}>
        <div >
          {(questionNumber + 9).toString(36) + '. ' + description}
        </div>
        <div>
          <div>
            <span aria-hidden="true">전혀 그렇지 않다.</span>
            {buttons}
            <span aria-hidden="true">매우 그렇다.</span>
          </div>
        </div>
      </div>
    );
  }
}