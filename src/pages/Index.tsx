import * as React from 'react';
import MainPage from './main/MainPage';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import QuestionPage from './question/QuestionPage';
import ResultPage from './result/ResultPage';

export interface IndexProps {
}

export default class Index extends React.Component<IndexProps, any> {
  public render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route path="/question" component={QuestionPage}/>
          <Route path="/result" component={ResultPage}/>
        </div>
      </Router>
    );
  }
}
