import React from 'react';
import Raiting from '../../components/host/Raiting';

import Lightroom from '../../components/hero/Lightroom';
import Infos from '../../components/host/Infos';

// const data = require('../../data/data.json');

class Accomodation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accomodation: { pictures: [], host: [], tags: [], equipements: [] },
    };
  }

  render() {
    return (
      <div>
        <Lightroom />
        <Infos />
      </div>
    );
  }
}

export default Accomodation;
