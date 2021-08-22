import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './HeroSection.css';
import ScrollOnView from '../../common/ScrollOnView';
import { withAuth0 } from '@auth0/auth0-react';
import {Container,Row} from 'react-bootstrap';
class Explore extends Component {
  render() {
    return (
      <>
        <Element name="scrollToExplore" />
        <section className="c-TeamSection">
          <ScrollOnView reverse>
            <Container>
              <Row>

              </Row>
            </Container>
          </ScrollOnView>
        </section>
      </>
    );
  }
}

export default withAuth0( Explore );
