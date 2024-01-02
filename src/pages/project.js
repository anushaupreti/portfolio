import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Image from '../../src/assets/dreamplace.webp';
import BannerImg from '../../src/assets/bannerimage.jpeg';
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
    <div id='project'>
      <Container>
        <TitleContainer>
          <Header>Our Projects</Header>
          <p>Projects that are completed:</p>
        </TitleContainer>
        <Cards>
          {projects.map((project) => {
            return (
              <CustomCard
                // bg={'primary'}
                key={`${project.id}`}
                // text={'primary' === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className='mb-2'
              >
                <div>
                  <img
                    src={Image}
                    style={{ width: '273px', height: '350px' }}
                  ></img>
                  <Card.Title className='text-center'>
                    {project.name}
                  </Card.Title>
                </div>
              </CustomCard>
            );
          })}
        </Cards>
      </Container>
      <Banner>
        <h1>
          I'm <span>Available</span> for Freelancing
        </h1>
        <Button>HIRE ME</Button>
      </Banner>
    </div>
  );
};

export default Project;
const Container = styled.div``;
const Cards = styled.div`
  display: flex;
  gap: 5px;
  border: none;
  img:hover {
    // opacity: 0.2;
    // background-color: rgba(0, 0, 0, 0.5);
  }
`;

const CustomCard = styled(Card)`
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin: 50px 0px 0px;
  padding: 65px 0px;

  p {
    color: #999;
  }
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 50px;
`;

const OwnCard = styled.div`
  border: 1px solid red;
  width: 40vw;
  text-align: center;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #7b6079;
  color: white;
  border-radius: 50px;
  // margin-left: 20px;
`;
const Banner = styled.div`
  // background-color: red;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justfy-content: center;
  margin-top: 20px;
  padding: 60px 0px;
  color: #000;
  // font-weight: 800;
  background-image: url(${BannerImg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;

  h1 {
    font-weight: 900 !important;
    margin-bottom: 46px;
    letter-spacing: 3px;
  }
`;
