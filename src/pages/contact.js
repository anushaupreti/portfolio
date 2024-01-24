import React from 'react';
import styled from 'styled-components';
import { FaAddressCard, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { IoMdMailUnread } from 'react-icons/io';

const contacts = [
  {
    id: 0,
    title: 'Address',
    description: 'kathmandu, Nepal',
    icon: (
      <FaAddressCard
        style={{ margin: '5px 0px', fontSize: '2rem', color: '#fff' }}
      />
    ),
  },

  {
    id: 1,
    title: 'Email',
    description: 'anushaupreti99@gmail.com',
    icon: (
      <IoMdMailUnread
        style={{ margin: '5px 0px', fontSize: '2rem', color: '#fff' }}
      />
    ),
  },
  {
    id: 2,
    title: 'LinkedIn',
    description: 'https://www.linkedin.com/in/anushaupreti99/',
    icon: (
      <FaLinkedin
        style={{ margin: '5px 0px', fontSize: '2rem', color: '#fff' }}
      />
    ),
  },
  {
    id: 3,
    title: 'Github',
    description: 'https://github.com/anushaupreti',
    icon: (
      <FaGithub
        style={{ margin: '5px 0px', fontSize: '2rem', color: '#fff' }}
      />
    ),
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
        <Cards>
          {contacts.map((contact) => {
            return (
              <Card key={contact.id}>
                <div className='circle'>{contact.icon}</div>
                <h4>{contact.title}</h4>
                <p>{contact.description}</p>
              </Card>
            );
          })}
        </Cards>
      </Container>
    </div>
  );
};

export default Contact;
const Container = styled.div``;

const Cards = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2px;
  border: none;
`;

const Card = styled.div`
  min-width: 250px;
  background-color: #fff;
  margin: 0 10px;
  border-radius: 10px;
  padding: 20px;
  height: 250px;
  text-align: center;
  box-shadow: 1px 2px 9px #7b6079;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    margin-top: 15px;
  }
  .circle {
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: #7b6079;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  padding: 65px 0px;

  p {
    color: #999;
  }
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 50px;
`;
