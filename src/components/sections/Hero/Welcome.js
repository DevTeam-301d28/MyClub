import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import { getConfig } from 'configs/config';
import axios from 'axios';
import './HeroSection.css';
import SportModal from './Modal/SportModal';
const variants = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 },
};

class Welcome extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      userInfo : '',
    };
  }


  componentDidMount= async () => {
    if ( this.props.auth0.isAuthenticated ) {
      this.props.auth0
        .getIdTokenClaims()
        .then( ( res ) => {
          let jwt = res.__raw;
          let config = {
            headers: { Authorization: 'Bearer ' + jwt },
            audience: getConfig.audience,
            method: 'get',
            baseURL: 'http://localhost:3050',
            url: '/checkJwt',
          };
          axios( config )
            .then( ( response ) => {
              console.log( response.data );
              this.setState( { userInfo: response.data } );
            } )
            .catch( ( error ) => console.log( error.message ) );
        } )
        .catch( ( error ) => console.log( error.message ) );
    }
  };



  render() {
    return (
      <Container
        fluid
        className='c-HeroSection flex flex-center flex-space-btw'
      >
        <Row>
          <Col>
            <section>
              <motion.div
                className='c-HeroSection__content flex flex-col'
                initial='hidden'
                animate='visible'
                variants={variants}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h1 className='c-HeroSection__title'>Welcome !</h1>
                <p className='c-HeroSection__paragraph'>
                  select your favorite team
                </p>
                <SportModal userdata={this.state.userInfo}/>
              </motion.div>
            </section>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withAuth0( Welcome );
