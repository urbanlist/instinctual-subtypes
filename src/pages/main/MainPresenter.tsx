import * as React from 'react';
import HeaderTemplate from '../../templates/HeaderTemplate';
import FooterTemplate from '../../templates/FooterTemplate';
import MainTemplate from '../../templates/MainTemplate';
import NewsletterTemplate from '../../templates/NewsletterTemplate';

export interface IMainPresenterProps {
}

export default class MainPresenter extends React.Component<IMainPresenterProps> {
  public render() {
    return (
      <>
        <HeaderTemplate />
        <MainTemplate />
        <NewsletterTemplate />
        <FooterTemplate />
      </>
    );
  }
}
