import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Me from '../images/me.png';

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
              Reprehenderit qui nostrud ad veniam magna. Laborum occaecat
              incididunt fugiat aliquip ipsum ad velit labore cupidatat dolor in
              consectetur esse tempor. Reprehenderit ad sunt eiusmod ea officia
              sint cupidatat sint ullamco consectetur. Nisi officia veniam aute
              pariatur nostrud dolor eiusmod magna esse do. Duis irure eiusmod
              aliqua duis tempor. Velit duis nostrud sint non incididunt quis
              adipisicing. Nisi incididunt voluptate nostrud est anim aute
              laboris.
            </p>
            <p>
              Quis anim ea et in consequat. Est exercitation veniam eiusmod id
              officia nulla. Irure deserunt nulla laboris esse anim elit duis
              tempor consectetur quis. Dolor do aute ex nisi qui anim
              exercitation culpa anim dolore minim. Voluptate proident sint
              commodo proident laboris Lorem ex exercitation cillum ea.
            </p>
            <div className='resume-button'>Resume</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
