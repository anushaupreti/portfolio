import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

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
            <div>
              <FaTwitter style={{ margin: '0 5px' }} />
              <FaLinkedin />
              <FaGithub />
            </div>
          </div>
          <div className='col-md  footer-center'>
            <h2>Links</h2>
            <ul>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#project'>Project</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
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
  font-size: 10px;
  background: #000000;
  padding: 7em 0;
  z-index: 0;
  display: block;
  box-sizing: border-box;
  line-height: 1.8;
  font-weight: 400;
  color: #999;

  .footer-center {
    ul {
      list-style: none;
    }
    a {
      color: #999;
      text-decoration: none;
    }
  }
`;
