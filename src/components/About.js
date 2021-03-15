import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Me from '../images/me.png';
import Resume from '../images/resume.pdf';

import '../styles/About.css';

const About = () => {
  return (
    <section className='about'>
      <Container>
        <h1 className='about-title'>ABOUT ME</h1>
        <Row className='about-content'>
          <Col md={6} sm={12}>
            <div className='about-img'>
              <img src={Me} alt='me' width='70%' height='auto'></img>
            </div>
          </Col>
          <Col md={6} sm={12} className='about-info'>
            <p>
              Hi! I recently graduated from UVA in December of 2020, where I
              studied physics. My interests lie in software development,
              consulting, and quality assurance.
            </p>
            <p>
              My main skill set is in web development, however I have recently
              been dipping my toes into machine learning. Some of the
              technologies I enjoy using include React, Python, Node.js,
              Express.js, and MySQL.
            </p>
            <p>
              Outside of work, I enjoy playing sports, trying new restaurants,
              and spending time with friends and family.
            </p>
            <p>
              If you would like to learn more about me, check out my resume
              below!
            </p>
            <a
              href={Resume}
              target='_blank'
              className='resume-button'
              rel='noopener noreferrer'
            >
              Resume
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
