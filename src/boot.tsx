import * as React from 'react';
import { render } from 'react-dom';
import Index from './pages/Index';
import './boot.styl';

declare const module: any;

render(<Index />, document.getElementById('boot'));

if (module.hot) {
    module.hot.accept();
}