import * as React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './Main.styl';

export interface MainProps {
}

export default class Main extends React.Component<MainProps, any> {
  public render() {
    return (
      <div className="main">
        <div className="banner">
          <Link to="/donation">
            <button>후원자로 참가하기</button>
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
