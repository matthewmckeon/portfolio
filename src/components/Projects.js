import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import projectData from '../data';
import '../styles/Projects.css';
import RoundsAppLive from '../images/RoundsAppLive.png';

const Projects = () => {
  return (
    <section className='projects'>
      <Container>
        <h1 className='projects-title'>PROJECTS</h1>
        {projectData.map((project) => {
          return (
            <Row className='project-content'>
              <Col lg={4} sm={12}>
                <h3 className='project-name'>{project.title}</h3>
                <p>{project.info}</p>
                <a
                  href={project.url}
                  target='blank'
                  className='project-button-live'
                >
                  See Live
                </a>
                <a
                  href={project.repo}
                  target='blank'
                  className='project-button-source'
                >
                  Source Code
                </a>
              </Col>
              <Col lg={8} sm={12}>
                <img
                  src={RoundsAppLive}
                  alt='RoundsApp'
                  width='700vw'
                  height='auto'
                  className='project-image'
                ></img>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Projects;
