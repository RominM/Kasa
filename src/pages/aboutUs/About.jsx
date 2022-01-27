import React from 'react';
import Banner from './../../components/banner/Banner';
import Dropbox from './../../components/dropbox/Dropbox';
import './about.scss';

const AboutUs = () => {
  return (
    <>
      <Banner />
      <div className='container-dropbox'>
        <Dropbox />
        <Dropbox />
        <Dropbox />
        <Dropbox />
      </div>
    </>
  );
};

export default AboutUs;
