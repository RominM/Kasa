import React from 'react';
import Accordion from './../../components/accordion/Accordion';
import './about.scss';
import bannerAbout from './../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';

const AboutUs = () => {
  const fiability = `Les annonces postées sur Kasa garantissent une fiabilité totale. 
  Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées 
  par nos équipes.`;

  const respect = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout 
  comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre 
  plateforme.`;

  const service = `Nos équipes se tiennent à votre disposition pour vous fournir une 
  expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`;

  const responsability = `La sécurité est la priorité de Kasa. Aussi bien pour nos 
  hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos 
  services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de 
  vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité 
  domestique pour nos hôtes.`;

  return (
    <>
      <div className="banner">
        <img src={bannerAbout} alt="montagnes" />
      </div>
      <div className="container-accordion">
        <Accordion title="fiabilité">{fiability}</Accordion>
        <Accordion title="respect">{respect}</Accordion>
        <Accordion title="service">{service}</Accordion>
        <Accordion title="sécurité">{responsability}</Accordion>
      </div>
    </>
  );
};

export default AboutUs;
