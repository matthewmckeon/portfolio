import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className='contact'>
      <Container>
        <Fade delay={400}>
          <h1 className='contact-title'>CONTACT</h1>
        </Fade>
        <Fade delay={500} up={true} distance='40px'>
          <h3 className='cta'>Would you like to connect? Awesome!</h3>
          <a
            href='mailto: mattmckeon2@gmail.com'
            target='blank'
            className='contact-button'
          >
            Let's Talk
          </a>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
