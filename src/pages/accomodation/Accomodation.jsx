import React from 'react';
import { Navigate, useParams } from 'react-router';
import Slider from '../../components/slider/Slider';
import Host from '../../components/host/Host';
import Accordion from '../../components/accordion/Accordion';
import './accomodation.scss';
import accomodations from '../../data/data.json';



const Accomodation = () => {
  const currentRouteParams = useParams();
  const accomodationId = currentRouteParams.id;

  // init accomodation
  const currentAccomodation = accomodations.find(
    (accomodation) => accomodation.id === accomodationId
  );

  // if wrong accomodaton URL
  if (!currentAccomodation) {
    return <Navigate to="/not-found" />;
  }

  return (
    <>
      <Slider currentAccomodation={currentAccomodation} />
      <Host currentAccomodation={currentAccomodation} />
      <section className="host--section">
        <div className="accordion-left">
          <Accordion title="description">
            <p>{currentAccomodation.description}</p>
          </Accordion>
        </div>
        <div className="accordion-right">
          <Accordion title="équipement">
            <ul>
              {currentAccomodation.equipments.map((equipment, index) => (
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
