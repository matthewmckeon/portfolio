import React from 'react';
import { Container } from 'react-bootstrap';

import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <Container>
        <h1 className='title'>
          Hi, my name is
          <span className='name'> Matt McKeon</span>
          <br />
          I'm a Full-stack Developer.
        </h1>
        <br />
        <div className='button'>Learn more</div>
      </Container>
    </section>
  );
};

export default Hero;
