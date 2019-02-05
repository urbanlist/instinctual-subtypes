import * as React from 'react';
import App from './App';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

export interface IndexProps {
}

export default class Index extends React.Component<IndexProps, any> {
  public render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </Router>
    );
  }
}
