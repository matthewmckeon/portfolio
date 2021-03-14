import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/Projects.css';

import RoundsAppLive from '../images/RoundsAppLive.png'

const Projects = () => {
  return (
    <section className='projects'>
      <Container>
        <h1 className='projects-title'>PROJECTS</h1>
        <Row className='project-content'>
          <Col lg={4} sm={12}>
            <h3 className='project-name'>Project Title</h3>
            <p>Commodo quis sit esse laboris anim pariatur nisi ad ut. Cupidatat occaecat exercitation dolore elit Lorem culpa. Ex duis aute sit id. Cillum dolore sunt ipsum labore.</p>
            <a href='http://rounds-golf.heroku.app' target='blank' className='project-button-live'>
              See Live
            </a>
            <a href='http://rounds-golf.heroku.app' target='blank' className='project-button-source'>
              Source Code
            </a>
          </Col>
          <Col lg={8} sm={12}>
            <img src={RoundsAppLive} alt='RoundsApp' width='700vw' height='auto' className='project-image'></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
