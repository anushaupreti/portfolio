import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

const Resume = () => {
  return (
    // <div id='resume'>
    //   <Container>
    //     <h1>Skills</h1>
    //     <Cards>
    //       <Card>
    //         <h3>HTML</h3>
    //         <CircularProgressbar
    //           value={80}
    //           text={`${80}%`}
    //           styles={{
    //             trail: { width: '5px', backgroundColor: 'red !important' },
    //             path: { background: 'red' },
    //           }}
    //         />
    //       </Card>
    //       <Card>
    //         <h3>CSS</h3>
    //         <CircularProgressbar
    //           value={80}
    //           text={`${80}%`}
    //           styles={{
    //             trail: { width: '5px', backgroundColor: 'red !important' },
    //             path: { background: 'red' },
    //           }}
    //         />
    //       </Card>
    //       <Card>
    //         <h3>JS</h3>
    //         <CircularProgressbar
    //           value={50}
    //           text={`${50}%`}
    //           styles={{
    //             trail: { width: '5px', backgroundColor: 'red !important' },
    //             path: { background: 'red' },
    //           }}
    //         />
    //       </Card>
    //     </Cards>
    //   </Container>
    // </div>

    <section class='ftco-section ftco-no-pb goto-here' id='resume'>
      <div class='container'>
        <div class='row'>
          <div class='col-md-3'>
            <nav id='navi'>
              <ul>
                <li>
                  <a href='#page-1'>Education</a>
                </li>
                <li>
                  <a href='#page-2'>Experience</a>
                </li>
                <li>
                  <a href='#page-3'>Skills</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class='col-md-9'>
            <div id='page-1' class='page one'>
              <h2 class='heading'>Education</h2>
              <div class='resume-wrap d-flex ftco-animate'>
                <div class='icon d-flex align-items-center justify-content-center'>
                  <span class='flaticon-ideas'></span>
                </div>
                <div class='text pl-3'>
                  <span class='date'>2016-2020</span>
                  <h2>
                    Bachelor of Computer Science and Information Technology
                  </h2>
                  <span class='position'>Tribhuvan University</span>
                  <p>
                    I am a graduate student of Bachelor in Science, Computer
                    Science and Information Technology (BSc.CS.IT), a course of
                    Tribhuvan University(TU) under the IOST department with the
                    vision to enable TU to play a key role in the global IT
                    scenario through world-class education, research and
                    innovation. The Project I have completed during my studies
                    is based on Deep Learning, one of the recent and burning
                    field of research over the globe. My education has provided
                    me with excellent knowledge of interdisciplinary studies
                    too; for instance cognitive science, networking, cloud
                    computing, programming, GIS, software engineering, AI,
                    System analysis & design. I am comfortable with the
                    multicultural and multidisciplinary environment.
                  </p>
                </div>
              </div>
              <div class='resume-wrap d-flex ftco-animate'>
                <div class='icon d-flex align-items-center justify-content-center'>
                  <span class='flaticon-ideas'></span>
                </div>
                <div class='text pl-3'>
                  <span class='date'>2014-2016</span>
                  <h2>+2 Science</h2>
                  <span class='position'>Sukuna Higher Secondary School</span>
                  <p>
                    I've completed Higher Education taking Science with Computer
                    Science in optional.
                  </p>
                </div>
              </div>
            </div>

            <div id='page-2' class='page two'>
              <h2 class='heading'>Experience</h2>
              <div class='resume-wrap d-flex ftco-animate'>
                <div class='icon d-flex align-items-center justify-content-center'>
                  <span class='flaticon-ideas'></span>
                </div>
                <div class='text pl-3'>
                  <span class='date'>2021-2022</span>
                  <h2>Laravel Developer</h2>
                  <span class='position'>CodeIT</span>
                  <p>
                    Responsible for building and maintaining modern web
                    applications using standard web development tools. writing
                    clean and secure modular codes that have undergone strict
                    testing and evaluation. checking the validity and
                    consistency of HTML, CSS, and JavaScript on different
                    platforms
                  </p>
                </div>
              </div>
              <div class='resume-wrap d-flex ftco-animate'>
                <div class='icon d-flex align-items-center justify-content-center'>
                  <span class='flaticon-ideas'></span>
                </div>
                <div class='text pl-3'>
                  <span class='date'>2020-2021</span>
                  <h2>Web Developer</h2>
                  <span class='position'>QuadTech</span>
                  <p>
                    Designing and building modern websites for different
                    organizations.
                  </p>
                </div>
              </div>
            </div>
            <div id='page-3' class='page three'>
              <h2 class='heading'>Skills</h2>
              <div class='row progress-circle mb-5'>
                <div class='col-lg-4 mb-4'>
                  <div class='bg-white rounded-lg shadow p-4'>
                    <h2 class='h5 font-weight-bold text-center mb-4'>CSS</h2>

                    <div class='progress mx-auto' data-value='50'>
                      <span class='progress-left'>
                        <span class='progress-bar'></span>
                      </span>
                      <span class='progress-right'>
                        <span class='progress-bar'></span>
                      </span>
                      <div class='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                        <div class='h2 font-weight-bold'>
                          50<sup class='small'>%</sup>
                        </div>
                      </div>
                    </div>

                    <div class='row text-center mt-4'>
                      <div class='col-6 border-right'>
                        <div class='h4 font-weight-bold mb-0'>28%</div>
                        <span class='small text-gray'>Last week</span>
                      </div>
                      <div class='col-6'>
                        <div class='h4 font-weight-bold mb-0'>40%</div>
                        <span class='small text-gray'>Last month</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='col-lg-4 mb-4'>
                  <div class='bg-white rounded-lg shadow p-4'>
                    <h2 class='h5 font-weight-bold text-center mb-4'>HTML</h2>

                    <div class='progress mx-auto' data-value='80'>
                      <span class='progress-left'>
                        <span class='progress-bar'></span>
                      </span>
                      <span class='progress-right'>
                        <span class='progress-bar'></span>
                      </span>
                      <div class='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                        <div class='h2 font-weight-bold'>
                          80<sup class='small'>%</sup>
                        </div>
                      </div>
                    </div>

                    <div class='row text-center mt-4'>
                      <div class='col-6 border-right'>
                        <div class='h4 font-weight-bold mb-0'>28%</div>
                        <span class='small text-gray'>Last week</span>
                      </div>
                      <div class='col-6'>
                        <div class='h4 font-weight-bold mb-0'>70%</div>
                        <span class='small text-gray'>Last month</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='col-lg-4 mb-4'>
                  <div class='bg-white rounded-lg shadow p-4'>
                    <h2 class='h5 font-weight-bold text-center mb-4'>jQuery</h2>

                    <div class='progress mx-auto' data-value='50'>
                      <span class='progress-left'>
                        <span class='progress-bar'></span>
                      </span>
                      <span class='progress-right'>
                        <span class='progress-bar'></span>
                      </span>
                      <div class='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                        <div class='h2 font-weight-bold'>
                          50<sup class='small'>%</sup>
                        </div>
                      </div>
                    </div>

                    <div class='row text-center mt-4'>
                      <div class='col-6 border-right'>
                        <div class='h4 font-weight-bold mb-0'>30%</div>
                        <span class='small text-gray'>Last week</span>
                      </div>
                      <div class='col-6'>
                        <div class='h4 font-weight-bold mb-0'>50%</div>
                        <span class='small text-gray'>Last month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-6 animate-box'>
                  <div class='progress-wrap ftco-animate'>
                    <h3>HTML5</h3>
                    <div class='progress'>
                      <div
                        class='progress-bar color-1'
                        role='progressbar'
                        aria-valuenow='90'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        style={{ width: '80%' }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-md-6 animate-box'>
                  <div class='progress-wrap ftco-animate'>
                    <h3>jQuery</h3>
                    <div class='progress'>
                      <div
                        class='progress-bar color-2'
                        role='progressbar'
                        aria-valuenow='85'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        style={{ width: '50%' }}
                      >
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-md-6 animate-box'>
                  <div class='progress-wrap ftco-animate'>
                    <h3>bootstrap</h3>
                    <div class='progress'>
                      <div
                        class='progress-bar color-3'
                        role='progressbar'
                        aria-valuenow='95'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        style={{ width: '60%' }}
                      >
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-md-6 animate-box'>
                  <div class='progress-wrap ftco-animate'>
                    <h3>CSS3</h3>
                    <div class='progress'>
                      <div
                        class='progress-bar color-4'
                        role='progressbar'
                        aria-valuenow='90'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        style={{ width: '50%' }}
                      >
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-md-6 animate-box'>
                  <div class='progress-wrap ftco-animate'>
                    <h3>WordPress</h3>
                    <div class='progress'>
                      <div
                        class='progress-bar color-5'
                        role='progressbar'
                        aria-valuenow='70'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        style={{ width: '30%' }}
                      >
                        <span>30%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-md-6 animate-box'>
                  <div class='progress-wrap ftco-animate'>
                    <h3>SEO</h3>
                    <div class='progress'>
                      <div
                        class='progress-bar color-6'
                        role='progressbar'
                        aria-valuenow='80'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        style={{ width: '50%' }}
                      >
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  width: 40vw;
  text-align: center;
`;
