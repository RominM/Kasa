import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Host from '../../components/host/Host';
import Dropbox from '../../components/dropbox/Dropbox';
import './accomodation.scss';

const Accomodation = () => {
  return (
    <>
      <Carousel />
      <Host />
      <section className="host--section">
        <div>
          <Dropbox />
        </div>
        <div>
          <Dropbox />
        </div>
      </section>
    </>
  );
};

export default Accomodation;
