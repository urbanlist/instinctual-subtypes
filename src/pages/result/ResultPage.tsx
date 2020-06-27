import * as React from 'react';
import ResultContainer from './ResultContainer';

export interface IResultPageProps {
}

export default class ResultPage extends React.Component<IResultPageProps> {
  public render() {
    return (
      <div>
        <ResultContainer />
      </div>
    );
  }
}
