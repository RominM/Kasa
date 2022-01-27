import React from 'react';
import { useParams } from 'react-router';
import Carousel from '../../components/carousel/Carousel';
import Host from '../../components/host/Host';
import Dropbox from '../../components/dropbox/Dropbox';
import './accomodation.scss';
import accomodations from '../../data/data.json'

const Accomodation = () => {
  const params = useParams()
  const accomodationId = params.id;

  const accomodation = accomodations.find(acc => acc.id === accomodationId)

  return (
    <>
      <Carousel />
      <Host accomodation={accomodation} />
      <section className="host--section">

        <div className='dropbox-left'>
          <Dropbox />
        </div>
        <div className='dropbox-right'>
          <Dropbox />
        </div>
      </section>
    </>
  );
};

export default Accomodation;
