import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <section className='footer'>
      <Container>
        <span className='back-to-top'>
          <Link to='hero' smooth duration={1000}>
            <FontAwesomeIcon icon={faChevronUp} className='up' size='2x' />
          </Link>
        </span>
        <div className='social-links'>
          <a
            href='https://www.linkedin.com/in/matt-mckeon/'
            id='linked-in'
            className='icon'
            target='blank'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className='up'
              size='2x'
              color='white'
            />
          </a>
          <a
            href='https://github.com/matthewmckeon'
            id='github'
            className='icon'
            target='blank'
          >
            <FontAwesomeIcon
              icon={faGithub}
              className='up'
              size='2x'
              color='white'
            />
          </a>
        </div>
        <div className='author'>
          <p>&copy; {new Date().getFullYear()} - Matt McKeon</p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
