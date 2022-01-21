import React from 'react';

import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Main from '../../components/main/Main';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Main />
    </React.Fragment>
  );
};

export default Home;
