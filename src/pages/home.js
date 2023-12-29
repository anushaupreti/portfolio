import React from 'react';
import ReactTyped from 'react-typed';
import styled from 'styled-components';

import About from './about';
import Resume from './resume';
import Project from './project';
import Contact from './contact';
import { HashLink } from 'react-router-hash-link';
import { FaArrowDown } from 'react-icons/fa';
// import Footer from

const Home = () => {
  return (
    <div>
      <div id='' className='row'>
        <div
          className='col-md'
          style={{ backgroundColor: '#fbf2f0', height: '100vh' }}
        ></div>
        <div
          className='col-md'
          style={{ backgroundColor: '#fff', height: '100vh' }}
        ></div>
        <Section>
          <Hey>Hey! I am</Hey>
          <Name>Anusha Upreti</Name>
          <ReactTyped
            style={{
              position: 'absolute',
              left: '0px',
              right: '0px',
              fontWeight: '700',
              lineHeight: '1.5',
              fontSize: '35px',
              color: '#7b6079',
            }}
            strings={[
              "<span  style ='color:#000;'>I'm a </span><u style ='color:#7b6079;'>Web Developer.</u>",
              "<span  style ='color:#000;'>I'm a </span> <u style ='color:#7b6079;'>Blogger.</u>",
              "<span  style ='color:#000;'>I'm a </span> <u style ='color:#7b6079;'>Web Designer.</u>",
            ]}
            typeSpeed={50}
            backSpeed={50}
            showCursor={true}
            loop
          />
        </Section>
        <div
          style={{
            display: 'flex',
            // justifyContent: 'center',
            position: 'absolute',
            bottom: '25%',
            left: '47.1%',
          }}
        >
          <HashLink
            smooth
            to={'#resume'}
            style={{
              border: '1px solid #edf0ff',
              padding: '18px 20px',
              transform: 'rotateZ(45deg)',
              background: '#edf0ff',
            }}
          >
            <FaArrowDown style={{ transform: 'rotateZ(-45deg)' }} />
          </HashLink>
        </div>
      </div>
      <About />
      <Resume />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;

const Section = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: block;
  z-index: 100;
  text-align: center !important;
  position: absolute;
  // left: 45%;
  top: 40%;
`;
const Hey = styled.h5`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 800;
  color: #7b6079;
  letter-spacing: 4px;
`;
const Name = styled.h1`
  font-size: 60px;
  font-weight: 800;
  ine-height: 1.5;
  color: black;
  margin-bottom: 0.5rem;
`;
