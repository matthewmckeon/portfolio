import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Me from '../images/me.png';
import Resume from '../images/resume.pdf';

import '../styles/About.css';

const About = () => {
  return (
    <section className='about'>
      <Container>
        <Fade delay={400}>
          <h1 className='about-title'>ABOUT ME</h1>
        </Fade>
        <Row className='about-content'>
          <Col md={6} sm={12}>
            <Fade bottom={true} distance='30px' delay={500}>
              <div className='about-img'>
                <img src={Me} alt='me' width='70%' height='auto' className='me'></img>
              </div>
            </Fade>
          </Col>
          <Col className='about-info'>
            <Fade left={true} distance='30px' delay={600}>
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
            </Fade>
            <Fade right={true} delay={550} distance='100px'>
              <a
                href={Resume}
                target='_blank'
                className='resume-button'
                rel='noopener noreferrer'
              >
                Resume
              </a>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
