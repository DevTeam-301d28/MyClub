import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './TeamSection.css';
import ScrollOnView from '../../common/ScrollOnView';
import { withAuth0 } from '@auth0/auth0-react';
import {Container,Row,Col} from 'react-bootstrap';
class Players extends Component {
  render() {
    return (
      <>
        <Element name="scrollToLatestPlayers" />
        <section className="c-TeamSection">
          <ScrollOnView reverse>
            <Container>
              <Row>
                <Col>
                  <h1 className="c-HeroSection__title">
                        Players Section !
                  </h1>
                </Col>
              </Row>
            </Container>
          </ScrollOnView>
        </section>
      </>
    );
  }
}

export default withAuth0( Players );
