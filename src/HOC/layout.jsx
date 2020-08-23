import React from 'react';

import Header from '../components/Home/header_footer/Header';
import Footer from '../components/Home/header_footer/Footer';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
