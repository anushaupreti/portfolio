import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '62px' }}>{props.children}</main>
      <Footer />
    </>
  );
};
export default Layout;
