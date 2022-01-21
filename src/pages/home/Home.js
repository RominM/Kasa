import React from "react";
import Header from "./../../components/header/Header";
import Banner from "./../../components/banner/Banner";
import Main from "./../../components/main/Main";

class Home extends React.Component{
  render() {
    return ( 
      <>
        <Header />
        <Banner />
        <Main />
      </>
    );
  };
};

export default Home;