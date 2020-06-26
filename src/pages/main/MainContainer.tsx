import * as React from 'react';
import MainPresenter from './MainPresenter';

export interface IMainContainerProps {
}

export interface IMainContainerState {
}

export default class MainContainer extends React.Component<IMainContainerProps, IMainContainerState> {
  constructor(props: IMainContainerProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <>
        <MainPresenter />
      </>
    );
  }
}
