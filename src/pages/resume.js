import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <h1>Skills</h1>
        <Cards>
          <Card>
            <h3>HTML</h3>
            <CircularProgressbar
              value={80}
              text={`${80}%`}
              styles={{
                trail: { width: '5px', backgroundColor: 'red !important' },
                path: { background: 'red' },
              }}
            />
          </Card>
          <Card>
            <h3>CSS</h3>
            <CircularProgressbar
              value={80}
              text={`${80}%`}
              styles={{
                trail: { width: '5px', backgroundColor: 'red !important' },
                path: { background: 'red' },
              }}
            />
          </Card>
          <Card>
            <h3>JS</h3>
            <CircularProgressbar
              value={50}
              text={`${50}%`}
              styles={{
                trail: { width: '5px', backgroundColor: 'red !important' },
                path: { background: 'red' },
              }}
            />
          </Card>
        </Cards>
      </Container>
    </div>
  );
};

export default Resume;

const Container = styled.div``;
const Cards = styled.div`
  display: flex;
  gap: 5px;
  border: none;
`;
const Card = styled.div`
  // border: 1px solid red;
  width: 40vw;
  text-align: center;
`;
