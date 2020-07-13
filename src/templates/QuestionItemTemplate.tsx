import * as React from 'react';
import { IQuestionItemComponentProps } from '../components/QuestionItemComponent';

export interface IQuestionItemTemplateProps {
    questionNumber: number;
    questions: React.Component<IQuestionItemComponentProps>[];
    description: string,
    enable: boolean;
  }

  export default class QuestionItemTemplate extends React.Component<IQuestionItemTemplateProps> {  
    public render() {
      const { 
        questionNumber,
        questions,
        description,
        enable
      } = this.props;
  
      return (
        <div className="question-item"
          style={{ opacity: enable ? 1 : 0.1 }}
          aria-hidden={enable ? "false" : "true"}>
          <div >
            {questionNumber + '. ' + description}
          </div>
          <div>
            <div>
              {questions.map(question => question.render())}
            </div>
          </div>
        </div>
      );
    }
  }