import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import BannerImg from '../../src/assets/bannerimage.jpeg';
import { VscGithub } from 'react-icons/vsc';
const projects = [
  {
    id: 0,
    name: 'Mini Grep',
    description:
      'This is cli based rust application which search for specific word in the file',
    link: 'https://github.com/anushaupreti/mini-grep',
  },
  {
    id: 1,
    name: 'Guessing Game',
    description:
      'Cli based guessing game application where we guess for matching number.',
    link: 'https://github.com/anushaupreti/guessing-game',
  },
  {
    id: 2,
    name: 'Quiz App',
    description: 'Quiz application made with react using travia api.',
    link: 'https://github.com/anushaupreti/react_quiz_app',
  },
  {
    id: 3,
    name: 'Todo App',
    description:
      'Sample todo application created using react for practice purpose.',
    link: 'https://github.com/anushaupreti/react_todo_app',
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
        <Service className='ftco-section' id='services-section'>
          <div className='container-fluid px-md-5'>
            <div className='row'>
              {projects.map((project) => {
                return (
                  <div
                    className='icon-section col-md-4 text-center d-flex'
                    key={project.id}
                  >
                    <a
                      href={project.link}
                      className='services-1 shadow'
                      target='__blank'
                    >
                      <VscGithub
                        style={{
                          display: 'block',
                          marginBottom: '30px',
                          marginLeft: '42%',
                          fontSize: '60px',
                          lineHeight: '1',
                          color: 'black',
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}
                      />
                      <div className='desc'>
                        <h3 className='mb-5'>{project.name}</h3>
                        <p>{project.description}</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </Service>
      </Container>
      <Banner>
        <h1>
          I'm <span>Available</span> for Freelancing.
        </h1>
        <Button>HIRE ME</Button>
      </Banner>
    </div>
  );
};

export default Project;
const Container = styled.div``;

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

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #7b6079;
  color: white;
  border-radius: 50px;
`;
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justfy-content: center;
  margin-top: 20px;
  padding: 60px 0px;
  color: #000;
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

const Service = styled.div`
  .services-1 {
    margin-bottom: 40px;
    padding: 2em;
    background: rgba(255, 255, 255, 0.1);
    width: 100%;
    text-decoration: none;
  }

  .services-1 .desc h3 {
    line-height: 1.3;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    position: relative;
    color: #000000;
  }
  .services-1 .desc span {
    display: block;
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 10px;
    color: #3e64ff;
  }
  .services-1 .desc p {
    color: rgba(0, 0, 0, 0.7);
  }
  .icon-section {
    :hover {
      background: #7b6079;
      svg,
      h3,
      p {
        color: #fff !important;
      }
    }
  }
  .services-1:hover h3 {
    color: #000000;
  }
`;
