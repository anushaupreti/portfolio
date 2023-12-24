import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
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
        <h1>Contact Me</h1>
        <p>You can contact me from here:</p>
        <Cards>
          {contacts.map((contact) => {
            return (
              <Card
                bg={'light'}
                key={contact.title}
                // text={'primary' === 'dark' ? 'dark' : 'white'}
                text={'dark'}
                style={{ width: '18rem' }}
                className='mb-2 text-center'
              >
                <Card.Header className='d-flex align-items-center flex-column'>
                  {contact.icon}
                  {contact.title}
                </Card.Header>
                <Card.Body>
                  {contact.description.includes('https') ||
                  contact.description.includes('gmail') ? (
                    <Card.Text>
                      {contact.description.includes('gmail') ? (
                        <Link to={`mailto:${contact.description}`}>
                          {contact.description}
                        </Link>
                      ) : (
                        <Link to={`${contact.description}`}>
                          {contact.description}
                        </Link>
                      )}
                    </Card.Text>
                  ) : (
                    <Card.Text>{contact.description}</Card.Text>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </Cards>
      </Container>
    </div>
  );
};

export default Contact;
const Container = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  border: none;
`;
const OwnCard = styled.div`
  border: 1px solid red;
  width: 40vw;
  text-align: center;
`;
