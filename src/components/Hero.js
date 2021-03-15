import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <Container>
        <Fade left={true} duration={1000} delay={500} distance='30px'>
          <h1 className='title'>
            Hi, my name is
            <span className='name'> Matt McKeon</span>
            <br />
            I'm a Full-stack Developer.
          </h1>
        </Fade>
        <br />
        <Fade left={true} duration={1000} delay={1000} distance='30px'>
          <Link to='about' smooth duration={1000}>
            <div className='button'>Learn more</div>
          </Link>
        </Fade>
      </Container>
    </section>
  );
};

export default Hero;
