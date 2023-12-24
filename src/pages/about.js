import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';

const About = () => {
  return (
    <Wrapper id='about'>
      <Container>
        <img src=''></img>
        <Right>
          <div className='right'>
            <h1>About Me</h1>
            <p>
              BSc. CSIT Graduate from Godawari College, Itahari with fundamental
              knowledge of software design, development and several years of
              experience in Related Field. Seeking to utilize broad educational
              background with excellent analytical, technical, and programming
              skills to thrive as PHP(Laravel) Developer.
            </p>

            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Anusha Upreti</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>Kathmandu, Nepal</td>
                </tr>
                <tr>
                  <td>Zip code</td>
                  <td>44600</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>anushaupreti99@gmail.com</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>9812345678</td>
                </tr>
              </tbody>
            </table>
            <p>10 Projects completed</p>
            <button>Download CV</button>
          </div>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  // display: flex;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 800px;
    height: 80vh;
    background-color: pink;
  }
`;

const Right = styled.div`
  flex: 1;
`;
