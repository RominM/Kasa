import React from 'react';
import Dropbox from './../../components/dropbox/Dropbox';
import './about.scss';

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
        <img
          src={require('./../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png')}
          alt="montagnes"
        />
      </div>
      <div className="container-dropbox">
        <Dropbox title="Fiabilité" content="">
          {fiability}
        </Dropbox>
        <Dropbox title="Respect" content={respect} />
        <Dropbox title="Service" content={service} />
        <Dropbox title="Sécurité" content={responsability} />
      </div>
    </>
  );
};

export default AboutUs;
