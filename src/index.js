// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/About';
// Style
import './style/reset.scss';
import './style/root.scss';
import './style/mediaQ.scss';

// render
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/apropos" element={<AboutUs />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
