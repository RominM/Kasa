import React from 'react';
import { useParams } from 'react-router';
import Carousel from '../../components/carousel/Carousel';
import Host from '../../components/host/Host';
import Dropbox from '../../components/dropbox/Dropbox';
import './accomodation.scss';
import data from '../../data/data.json';

const Accomodation = () => {
  const DATA = useParams();
  const accId = DATA.id;

  const setData = data.find((acc) => acc.id === accId);

  return (
    <>
      <Carousel setData={setData} />
      <Host setData={setData} />
      <section className="host--section">
        <div className="dropbox-left">
          <Dropbox title="description">
            <p>{setData.description}</p>
          </Dropbox>
        </div>
        <div className="dropbox-right">
          <Dropbox title="equipement">
            <ul>
              {setData.equipments.map((equipment, index) => (
                <li key={equipment + index}>{equipment}</li>
              ))}
            </ul>
          </Dropbox>
        </div>
      </section>
    </>
  );
};

export default Accomodation;
