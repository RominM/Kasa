import React from 'react';
import { useParams } from 'react-router';
import Slider from '../../components/slider/Slider';
import Host from '../../components/host/Host';
import Accordion from '../../components/accordion/Accordion';
import './accomodation.scss';
import data from '../../data/data.json';

const Accomodation = () => {
  const DATA = useParams();
  const accId = DATA.id;

  const setData = data.find((acc) => acc.id === accId);

  return (
    <>
      <Slider setData={setData} />
      <Host setData={setData} />
      <section className="host--section">
        <div className="accordion-left">
          <Accordion title="description">
            <p>{setData.description}</p>
          </Accordion>
        </div>
        <div className="accordion-right">
          <Accordion title="équipement">
            <ul>
              {setData.equipments.map((equipment, index) => (
                <li key={equipment + index}>{equipment}</li>
              ))}
            </ul>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Accomodation;
