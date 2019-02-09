import * as React from 'react';
import Header from '../components/Header';
import Donation from '../components/Donation';
import Footer from '../components/Footer';


export interface DonationPageProps {
}

export default class DonationPage extends React.Component<DonationPageProps, any> {
  public render() {
    return (
      <div className="donation-page">
        <Header />
        <Donation />
        <Footer />
      </div>
    );
  }
}
