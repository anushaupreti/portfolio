import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper id='about'>
      <Container>
        <div className='row' style={{ height: '90vh' }}>
          <div className='col-md' style={{ background: 'pink' }}>
            <img src=''></img>
          </div>
          <div className='col-md'>
            <Right>
              <div className='right'>
                <h1
                  className='mb-4'
                  style={{ fontWeight: '750', fontSize: '45px' }}
                >
                  About Me
                </h1>
                <Description>
                  BSc. CSIT Graduate from Godawari College, Itahari with
                  fundamental knowledge of software design, development and
                  several years of experience in Related Field. Seeking to
                  utilize broad educational background with excellent
                  analytical, technical, and programming skills to thrive as
                  PHP(Laravel) Developer.
                </Description>
                <Table>
                  <tbody>
                    <tr>
                      <td>Name: </td>
                      <td className='value'>Anusha Upreti</td>
                    </tr>
                    <tr>
                      <td>Address: </td>
                      <td className='value'>Kathmandu, Nepal</td>
                    </tr>
                    <tr>
                      <td>Zip code: </td>
                      <td className='value'>44600</td>
                    </tr>
                    <tr>
                      <td>Email: </td>
                      <td className='value'>anushaupreti99@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Phone: </td>
                      <td className='value'>9812345678</td>
                    </tr>
                  </tbody>
                </Table>
                <p>10 Projects completed</p>
                <Button>Download CV</Button>
              </div>
            </Right>
          </div>
        </div>
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
    // width: 800px;
    height: 80vh;
    background-color: pink;
  }
`;

const Right = styled.div`
  flex: 1;
  width: 100%;
  padding: 40px 15px;
`;

const Description = styled.p`
  color: #999;
  line-height: 30px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: purple;
  color: white;
  border-radius: 10px;
`;

const Table = styled.table`
  font-weight: 400;
  padding: 40px;

  margin: 40px 0px;
  tr {
    line-height: 35px;
  }
  .value {
    color: #999;
  }
`;
