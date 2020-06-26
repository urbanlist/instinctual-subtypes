import * as React from 'react';
import HeaderTemplate from '../templates/HeaderTemplate';
import Donation from '../templates/Donation';
import FooterTemplate from '../templates/FooterTemplate';


export interface DonationPageProps {
}

export default class DonationPage extends React.Component<DonationPageProps, any> {
  public render() {
    return (
      <div className="donation-page">
        <HeaderTemplate />
        <Donation />
        <FooterTemplate />
      </div>
    );
  }
}
