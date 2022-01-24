import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Lightroom from '../../components/hero/Lightroom';
import Infos from '../../components/host/Infos';

// const data = require('../../data/data.json');

export default function Accomodation() {
  return (
    <div>
      <Header />
      <Lightroom />
      <Infos />
    </div>
  );
}
