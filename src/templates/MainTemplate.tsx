import * as React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './Main.styl';

export interface MainProps {
}

export default class MainTemplate extends React.Component<MainProps, any> {
  public render() {
    return (
      <div className="main">
        <div className="banner">
          <Link to="/question">
            <button>시작하기??!!</button>
          </Link>
        </div>
        <div className="content center">
          <div className="title">
            bla~bla title
          </div>
        </div>
      </div>
    );
  }
}
