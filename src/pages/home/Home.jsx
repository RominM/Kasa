import React from 'react';

import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
