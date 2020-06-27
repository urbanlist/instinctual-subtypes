import * as React from 'react';
import ResultPresenter from './ResultPresenter';

export interface IResultContainerProps {
}

export interface IResultContainerState {
}

export default class ResultContainer extends React.Component<IResultContainerProps, IResultContainerState> {
  constructor(props: IResultContainerProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <>
        <ResultPresenter />        
      </>
    );
  }
}
