import * as React from 'react';
import HeaderTemplate from '../../templates/HeaderTemplate';
import FooterTemplate from '../../templates/FooterTemplate';


export interface IResultPresenterProps {
}

export default class ResultPresenter extends React.Component<IResultPresenterProps> {
  public render() {
    return (
      <>
        <HeaderTemplate />
        <FooterTemplate />
      </>
    );
  }
}
