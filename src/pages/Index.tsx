import * as React from 'react';
import MainPage from './main/MainPage';
import DonationPage from './DonationPage';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

export interface IndexProps {
}

export default class Index extends React.Component<IndexProps, any> {
  public render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/donation" component={DonationPage} />
        </div>
      </Router>
    );
  }
}
