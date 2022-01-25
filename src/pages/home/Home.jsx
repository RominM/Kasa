import React from 'react';

import Header from '../../layout/header/Header';
import Banner from '../../components/banner/Banner';
import Main from '../../components/main/Main';
import Footer from '../../layout/footer/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Main />
    </React.Fragment>
  );
};

export default Home;
