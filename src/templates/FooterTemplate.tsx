import * as React from 'react';
import './Footer.styl';

export interface FooterProps {
}

export default class FooterTemplate extends React.Component<FooterProps, any> {
  public render() {
    return (
      <div className="footer">
        <div className="container">
          <p>footer</p>
          <p>text</p>
        </div>
      </div>
    );
  }
}
