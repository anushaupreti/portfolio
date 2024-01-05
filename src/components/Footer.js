import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import { FaArrowRightLong } from 'react-icons/fa6';

function Footer() {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-md'>
            <div>
              <h2>About</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div style={{ display: 'flex' }}>
              <div className='circle'>
                <FaTwitter style={{ margin: '0 10px', fontSize: '1.8rem' }} />
              </div>
              <div className='circle'>
                <FaLinkedin style={{ margin: '0 10px', fontSize: '1.5rem' }} />
              </div>
              <div className='circle'>
                <FaGithub style={{ margin: '0 10px', fontSize: '1.5rem' }} />
              </div>
            </div>
          </div>
          <div className='col-md  footer-center'>
            <h2>Links</h2>
            <ul>
              <li>
                <a href=''>
                  {' '}
                  <FaArrowRightLong style={{ marginRight: '5px' }} />
                  Home
                </a>
              </li>
              <li>
                <a href='#about'>
                  {' '}
                  <FaArrowRightLong style={{ marginRight: '5px' }} />
                  About
                </a>
              </li>
              <li>
                <a href='#project'>
                  <FaArrowRightLong style={{ marginRight: '5px' }} />
                  Project
                </a>
              </li>
              <li>
                <a href='#contact'>
                  <FaArrowRightLong style={{ marginRight: '5px' }} />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md'>
            <h2>Have a Questions???</h2>
            <p>anushaupreti99@gmail.com is way to connect</p>
          </div>
        </div>
        <div className='row p-0 '>
          <p className='text-center'>
            Copyright © All rights reserved @{new Date().getFullYear()}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  // height: 20vh;
  // border: 2px solid red;
  font-size: 16px;
  background: #000000;
  padding: 7em 0;
  z-index: 0;
  display: block;
  box-sizing: border-box;
  line-height: 1.8;
  font-weight: 400;
  color: #999;

  h2 {
    // text-align: center;
  }

  .circle {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-color: #404040;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
  }

  .footer-center {
    ul {
      list-style: none;
      padding-left: 0;
    }
    a {
      color: #999;
      text-decoration: none;
    }
  }
`;
