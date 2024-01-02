import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
// import { Card } from 'react-bootstrap';
import { FaAddressCard, FaLinkedin } from 'react-icons/fa';
import { FaPhoneVolume, FaGithub } from 'react-icons/fa6';
import { IoMdMailUnread } from 'react-icons/io';
import { Link } from 'react-router-dom';

const contacts = [
  {
    id: 0,
    title: 'Address',
    description: 'kathmandu, Nepal',
    icon: <FaAddressCard style={{ margin: '5px 0px' }} />,
  },
  {
    id: 1,
    title: 'Contact',
    description: '9812345678',
    icon: <FaPhoneVolume style={{ margin: '5px 0px' }} />,
  },
  {
    id: 2,
    title: 'Email',
    description: 'anushaupreti99@gmail.com',
    icon: <IoMdMailUnread style={{ margin: '5px 0px' }} />,
  },
  {
    id: 3,
    title: 'LinkedIn',
    description: 'https://www.linkedin.com/in/anushaupreti99/',
    icon: <FaLinkedin style={{ margin: '5px 0px' }} />,
  },
  {
    id: 4,
    title: 'Github',
    description: 'https://github.com/anushaupreti',
    icon: <FaGithub style={{ margin: '5px 0px' }} />,
  },
];

const Contact = () => {
  return (
    <div id='contact'>
      <Container>
        <TitleContainer>
          <Header>Contact Me</Header>
          <p>You can contact me from here:</p>
        </TitleContainer>
        <Cards className='row d-flex mb-5'>
          <div className='card col-md-6 col-lg-3 d-flex'>part1</div>
          <div className='card col-md-6 col-lg-3 d-flex'>part2</div>
          <div className='card col-md-6 col-lg-3 d-flex'>part3</div>
          <div className='card col-md-6 col-lg-3 d-flex'>part4</div>
        </Cards>
      </Container>
    </div>
  );
};

export default Contact;
const Container = styled.div`
  // margin-left: 15px;
  // margin-right: 15px;
`;

const Cards = styled.div`
  height: 300px;
  background-color: red;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2px;
  border: none;
  .card {
    background-color: #7b6079;
    width: 18vw;
    margin: 25px;
    align-items: center;
    border-radius: 4px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  // margin: 50px 0px 0px;
  padding: 65px 0px;

  p {
    color: #999;
  }
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 50px;
`;
