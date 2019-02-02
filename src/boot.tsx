import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';

declare const module: any;

render(<App />, document.getElementById('boot'));

if (module.hot) {
    module.hot.accept();
}