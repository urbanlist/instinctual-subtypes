import * as React from 'react';

export interface DonationProps {
}

export default class Donation extends React.Component<DonationProps, any> {
  AccountDom : any;

  constructor(props: Readonly<DonationProps>) {
    super(props);
  }

  public render() {
    return (
      <div className="donation">
        <div className="banner">
        </div>
        <div className="content">
          <div className="container">
          </div>
        </div>
      </div>
    );
  }
}
