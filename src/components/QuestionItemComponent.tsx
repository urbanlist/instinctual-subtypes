import * as React from 'react';


const pointToDescription = (idx: number): string => {
  return idx === 1 ? "전혀 그렇지 않다" :
  idx === 2 ? "그렇지 않다" :
    idx === 3 ? "보통이다" :
      idx === 4 ? "그렇다" :
        idx === 5 ? "매우 그렇다" :
          "";
}

export interface IQuestionItemComponentProps {
  questionNumber: number;
  description: string;
  answerNumber: Number;
  enable: boolean;

  raiseAnswer?: () => void;
}

export default class QuestionItemComponent extends React.Component<IQuestionItemComponentProps> {
  private clickAnswer(selectNum: number) {
    const { enable, raiseAnswer } = this.props;
    if (enable == false)
      return;

    raiseAnswer && raiseAnswer();
  }

  public render() {
    const { 
      questionNumber,
      answerNumber,
      enable
    } = this.props;

    const buttons = [1, 2, 3, 4, 5].map(inputNumber => {
      return (
        <div>
          <input
            id={`input-${questionNumber}-${inputNumber}`}
            type="radio"
            onClick={e => this.clickAnswer(inputNumber)}
            checked={answerNumber == inputNumber}
            onChange={e => null} />
          <label htmlFor={`input-${questionNumber}-${inputNumber}`}>
            <span>
              {pointToDescription(inputNumber)}
            </span>
          </label>
        </div>
      );
    })

    return (
      <div className="question-item"
        style={{ opacity: enable ? 1 : 0.1 }}
        aria-hidden={enable ? "false" : "true"}>
        <div >
          {"메세지"}
        </div>
        <div>
          <div>
            {buttons}
          </div>
          <div className="description">
            <div className="left">
              <span aria-hidden="true">전혀 그렇지 않다.</span>
            </div>
            <div className="right">
              <span aria-hidden="true">매우 그렇다.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}