import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import projectData from '../data';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className='projects'>
      <Container>
        <Fade delay={400}>
          <h1 className='projects-title'>PROJECTS</h1>
        </Fade>
        {projectData.map((project) => {
          return (
            <Row className='project-content' key={project.alt}>
              <Col lg={4} sm={12}>
                <Fade left={true} delay={600} distance='40px'>
                  <h3 className='project-name'>{project.title}</h3>
                  <p>{project.info}</p>
                  <a
                    href={project.url}
                    target='_blank'
                    className='project-button-live'
                    rel='noopener noreferrer'
                  >
                    See Live
                  </a>
                  <a
                    href={project.repo}
                    target='_blank'
                    className='project-button-source'
                    rel='noopener noreferrer'
                  >
                    Source Code
                  </a>
                </Fade>
              </Col>
              <Col lg={8} sm={12}>
                <Fade right={true} delay={800} distance='40px'>
                  <img
                    src={project.img}
                    alt={project.alt}
                    width='100%'
                    height='auto'
                    className='project-image'
                  ></img>
                </Fade>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Projects;
