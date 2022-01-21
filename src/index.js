// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Home from './pages/home/Home';
// Style
import './style/reset.scss';
import './style/root.scss';
import './style/mediaQ.scss';

// render
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
