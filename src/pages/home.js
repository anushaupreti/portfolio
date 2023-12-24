import React from 'react';
import About from './about';
import Resume from './resume';
import Project from './project';
import Contact from './contact';
// import Footer from

const Home = () => {
  return (
    <div>
      <div id=''>
        <h1>Home</h1>
      </div>
      <About />
      <Resume />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
