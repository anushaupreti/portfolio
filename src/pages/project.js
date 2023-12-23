import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const projects = [
  {
    id: 0,
    name: 'Hello world',
    description: 'This is my first project',
  },
  {
    id: 1,
    name: 'Hello world',
    description:
      'Hello world is the first program that should be written to master that prgramming language.',
  },
  {
    id: 2,
    name: 'Hello world',
    description:
      'Hello world is the first program that should be written to master that prgramming language.',
  },
  {
    id: 3,
    name: 'Hello world',
    description:
      'Hello world is the first program that should be written to master that prgramming language.',
  },
  {
    id: 4,
    name: 'Hello world',
    description:
      'Hello world is the first program that should be written to master that prgramming language.',
  },
];

const Project = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <h1>Projects</h1>
        <Cards>
          {projects.map((project) => {
            return (
              <Card
                bg={'primary'}
                key={'test'}
                text={'primary' === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className='mb-2'
              >
                <Card.Header>{project.name}</Card.Header>
                <Card.Body>
                  <Card.Title>{project.id} Card Title </Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Cards>
      </Container>
    </div>
  );
};

export default Project;
const Container = styled.div``;
const Cards = styled.div`
  display: flex;
  gap: 5px;
  border: none;
`;
const OwnCard = styled.div`
  border: 1px solid red;
  width: 40vw;
  text-align: center;
`;
