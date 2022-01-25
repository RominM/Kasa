// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/About';
import Accomodation from './pages/accomodation/Accomodation';
import Error from './pages/error404/Error';
// Components
import Header from './layout/header/Header.jsx';
import Footer from './layout/footer/Footer.jsx';
// Style
import './style/reset.scss';
import './style/root.scss';
import './style/mediaQ.scss';

// render
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<AboutUs />} />
        <Route path="/logement/*" element={<Accomodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
