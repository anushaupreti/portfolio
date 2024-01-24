import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoSchoolSharp } from 'react-icons/io5';
import { FaLaptopCode } from 'react-icons/fa';

const Resume = () => {
  return (
    <section className='ftco-section ftco-no-pb goto-here' id='resume'>
      <Container>
        <div className='row'>
          <div className='col-md-3'>
            <nav
              id='navi'
              style={{
                fontWeight: '800',
                color: '#000',
                textDecoration: 'none',
              }}
            >
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
          <div className='col-md-9'>
            <div id='page-1' className='page one'>
              <Heading>Education</Heading>
              <div className='resume-wrap d-flex'>
                <div className=''>
                  <span
                    style={{
                      backgroundColor: 'rgb(123, 96, 121)',
                      borderRadius: '50px',
                      padding: '17px 18px',
                      marginTop: '10px',
                    }}
                  >
                    <IoSchoolSharp
                      style={{
                        color: '#fff',
                        fontSize: '20px',
                      }}
                    />
                  </span>
                </div>
                <div className='text pl-3' style={{ marginLeft: '20px' }}>
                  <Date>2016-2020</Date>
                  <h4 style={{ fontWeight: '650' }}>
                    Bachelor of Computer Science and Information Technology
                  </h4>
                  <span style={{ fontWeight: '620' }}>
                    Tribhuvan University
                  </span>
                  <p style={{ color: '#999' }}>
                    I am a graduate student of Bachelor in Science, Computer
                    Science and Information Technology (BSc.CS.IT), a course of
                    Tribhuvan University(TU) under the IOST department with the
                    vision to enable TU to play a key role in the global IT
                    scenario through world-className education, research and
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
              <div className='resume-wrap d-flex ftco-animate'>
                <div className=''>
                  <span
                    style={{
                      backgroundColor: 'rgb(123, 96, 121)',
                      borderRadius: '50px',
                      padding: '17px 18px',
                      marginTop: '10px',
                    }}
                  >
                    <IoSchoolSharp
                      style={{
                        color: '#fff',
                        fontSize: '20px',
                      }}
                    />
                  </span>
                </div>
                <div className='text pl-3' style={{ marginLeft: '20px' }}>
                  <Date>2014-2016</Date>
                  <h4 style={{ fontWeight: '650' }}>+2 Science</h4>
                  <span style={{ fontWeight: '620' }}>
                    Sukuna Higher Secondary School
                  </span>
                  <p>
                    I've completed Higher Education taking Science with Computer
                    Science in optional.
                  </p>
                </div>
              </div>
            </div>
            <div id='page-2' className='page two'>
              <Heading>Experience</Heading>
              <div className='resume-wrap d-flex'>
                <div className=''>
                  <span
                    style={{
                      backgroundColor: 'rgb(123, 96, 121)',
                      borderRadius: '50px',
                      padding: '17px 18px',
                      marginTop: '10px',
                    }}
                  >
                    <FaLaptopCode
                      style={{
                        color: '#fff',
                        fontSize: '20px',
                      }}
                    />
                  </span>
                </div>
                <div className='text pl-3' style={{ marginLeft: '20px' }}>
                  <Date>2021-2022</Date>
                  <h2 style={{ fontWeight: '650' }}>Laravel Developer</h2>
                  <span style={{ fontWeight: '620' }}>CodeIT</span>
                  <p style={{ color: '#999' }}>
                    Responsible for building and maintaining modern web
                    applications using standard web development tools. writing
                    clean and secure modular codes that have undergone strict
                    testing and evaluation. checking the validity and
                    consistency of HTML, CSS, and JavaScript on different
                    platforms
                  </p>
                </div>
              </div>
              <div className='resume-wrap d-flex ftco-animate'>
                <div className='resume-wrap d-flex'>
                  <div className=''>
                    <span
                      style={{
                        backgroundColor: 'rgb(123, 96, 121)',
                        borderRadius: '50px',
                        padding: '17px 18px',
                        marginTop: '10px',
                      }}
                    >
                      <FaLaptopCode
                        style={{
                          color: '#fff',
                          fontSize: '20px',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className='text pl-3' style={{ marginLeft: '20px' }}>
                  <Date>2020-2021</Date>
                  <h2 style={{ fontWeight: '650' }}>Web Developer</h2>
                  <span style={{ fontWeight: '620' }}>QuadTech</span>
                  <p style={{ color: '#999' }}>
                    Designing and building modern websites for different
                    organizations.
                  </p>
                </div>
              </div>
            </div>
            <div id='page-3' className='page three'>
              <Heading>Skills</Heading>
              <div className='row progress-circle mb-5'>
                <div className='col-lg-4 mb-4'>
                  <div className='bg-white rounded-lg shadow p-4'>
                    <h2 className='h5 font-weight-bold text-center mb-4'>
                      CSS
                    </h2>

                    <div className='progress mx-auto' data-value='50'>
                      <span className='progress-left'>
                        <span className='progress-bar'></span>
                      </span>
                      <span className='progress-right'>
                        <span className='progress-bar'></span>
                      </span>
                      <div className='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                        <div className='h2 font-weight-bold'>
                          50<sup className='small'>%</sup>
                        </div>
                      </div>
                    </div>

                    <div className='row text-center mt-4'>
                      <div className='col-6 border-right'>
                        <div className='h4 font-weight-bold mb-0'>28%</div>
                        <span className='small text-gray'>Last week</span>
                      </div>
                      <div className='col-6'>
                        <div className='h4 font-weight-bold mb-0'>40%</div>
                        <span className='small text-gray'>Last month</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 mb-4'>
                  <div className='bg-white rounded-lg shadow p-4'>
                    <h2 className='h5 font-weight-bold text-center mb-4'>
                      HTML
                    </h2>

                    <div className='progress mx-auto' data-value='80'>
                      <span className='progress-left'>
                        <span className='progress-bar'></span>
                      </span>
                      <span className='progress-right'>
                        <span className='progress-bar'></span>
                      </span>
                      <div className='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                        <div className='h2 font-weight-bold'>
                          80<sup className='small'>%</sup>
                        </div>
                      </div>
                    </div>

                    <div className='row text-center mt-4'>
                      <div className='col-6 border-right'>
                        <div className='h4 font-weight-bold mb-0'>28%</div>
                        <span className='small text-gray'>Last week</span>
                      </div>
                      <div className='col-6'>
                        <div className='h4 font-weight-bold mb-0'>70%</div>
                        <span className='small text-gray'>Last month</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 mb-4'>
                  <div className='bg-white rounded-lg shadow p-4'>
                    <h2 className='h5 font-weight-bold text-center mb-4'>
                      jQuery
                    </h2>

                    <div className='progress mx-auto' data-value='50'>
                      <span className='progress-left'>
                        <span className='progress-bar'></span>
                      </span>
                      <span className='progress-right'>
                        <span className='progress-bar'></span>
                      </span>
                      <div className='progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center'>
                        <div className='h2 font-weight-bold'>
                          50<sup className='small'>%</sup>
                        </div>
                      </div>
                    </div>

                    <div className='row text-center mt-4'>
                      <div className='col-6 border-right'>
                        <div className='h4 font-weight-bold mb-0'>30%</div>
                        <span className='small text-gray'>Last week</span>
                      </div>
                      <div className='col-6'>
                        <div className='h4 font-weight-bold mb-0'>50%</div>
                        <span className='small text-gray'>Last month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap ftco-animate'>
                    <h3>HTML5</h3>
                    <div className='progress'>
                      <div
                        className='progress-bar color-1'
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
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap ftco-animate'>
                    <h3>jQuery</h3>
                    <div className='progress'>
                      <div
                        className='progress-bar color-2'
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
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap ftco-animate'>
                    <h3>bootstrap</h3>
                    <div className='progress'>
                      <div
                        className='progress-bar color-3'
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
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap ftco-animate'>
                    <h3>CSS3</h3>
                    <div className='progress'>
                      <div
                        className='progress-bar color-4'
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
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap ftco-animate'>
                    <h3>WordPress</h3>
                    <div className='progress'>
                      <div
                        className='progress-bar color-5'
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
                <div className='col-md-6 animate-box'>
                  <div className='progress-wrap ftco-animate'>
                    <h3>SEO</h3>
                    <div className='progress'>
                      <div
                        className='progress-bar color-6'
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
      </Container>
    </section>
  );
};

export default Resume;

const Container = styled.div`
  margin-top: 40px;
  padding: 50px;
`;
const Cards = styled.div`
  display: flex;
  gap: 5px;
  border: none;
`;
const Card = styled.div`
  width: 40vw;
  text-align: center;
`;

const Heading = styled.h2`
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 30px;
  color: rgb(123, 96, 121);
`;

const Date = styled.h6`
  color: rgb(123, 96, 121);
  font-weight: 800;
`;
