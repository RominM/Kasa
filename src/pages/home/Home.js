import React from "react";
import Header from "./../../components/Header";
import Banner from "./../../components/Banner";
import Main from "./../../components/Main";

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