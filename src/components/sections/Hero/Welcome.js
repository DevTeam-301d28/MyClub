import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import {Container,Row,Col} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import SportModal from './Modal/SportModal';

const variants = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 },
};

class Welcome extends Component {
  render() {
    return (
      <Container fluid className="c-HeroSection flex flex-center flex-space-btw" >
        <Row>
          <Col>
            <section >
              <motion.div
                className="c-HeroSection__content flex flex-col"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h1 className="c-HeroSection__title">
         Welcome !
                </h1>
                <p className="c-HeroSection__paragraph">
         select your favorite team
                </p>
                <SportModal/>
              </motion.div>
            </section>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withAuth0( Welcome );
