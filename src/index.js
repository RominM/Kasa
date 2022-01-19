import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import './style/base/reset.scss';
import './style/pages/home.scss';
import './style/utils/mediaQ.scss';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
