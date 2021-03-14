import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <section className='footer'>
      <Container>
        <span className='back-to-top'>
          <Link to='hero' smooth duration={1000}>
            <i className='fa fa-angle-up fa-2x' aria-hidden='true' />
          </Link>
        </span>
      </Container>
    </section>
  );
};

export default Footer;
