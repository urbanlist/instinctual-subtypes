import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.styl';

export interface HeaderProps {
}

export default class HeaderTemplate extends React.Component<HeaderProps, any> {
  public render() {
    return (
      <div className="header">
        <div className="title">
          <Link to="/">
            <div>To main</div>
          </Link>
        </div>
      </div>
    );
  }
}
