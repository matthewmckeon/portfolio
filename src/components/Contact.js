import React from 'react';
import { Container } from 'react-bootstrap';

import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className='contact'>
      <Container>
        <h1 className='contact-title'>CONTACT</h1>
        <h3 className='cta'>Would you like to connect? Awesome!</h3>
        <a
          href='mailto: mattmckeon2@gmail.com'
          target='blank'
          className='contact-button'
        >
          Let's Talk
        </a>
      </Container>
    </section>
  );
};

export default Contact;
