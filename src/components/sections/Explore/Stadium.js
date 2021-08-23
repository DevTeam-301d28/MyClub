import React, { Component } from 'react';
import './Team.css';
import { ListGroup, Card, Container, Col, Row } from 'react-bootstrap';
export class Stadium extends Component {
  render() {
    const {
      intStadiumCapacity,
      strStadium,
      strStadiumThumb,
      strCountry,
      strStadiumLocation,
      strStadiumDescription,
    } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Card className='profile-card' style={{ width: '100%' }}>
              <Card.Img
                className='img'
                src={strStadiumThumb}
                alt={strStadium}
                style={{
                  height: '250px',
                  width: '250px',
                  objectFit: 'contain',
                }}
              />
              <Card.Body style={{ width: '100%' }}>
                <ListGroup className='profile-social-links'>
                  <ListGroup.Item>Stadium Name :{strStadium}</ListGroup.Item>
                  <br></br>
                  <ListGroup.Item>Country :{strCountry}</ListGroup.Item>{' '}
                  <br></br>
                  <br></br>
                  <ListGroup.Item>
                    Stadium Location:{strStadiumLocation}
                  </ListGroup.Item>
                  <br></br>
                  <ListGroup.Item>
                    Stadium Capacity:{intStadiumCapacity}
                  </ListGroup.Item>
                  <br></br>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card className='profile-card' style={{ width: '100%' }}>
            <Card.Body>
              <ListGroup className='profile-social-links'>
                <ListGroup.Item className='profile-bio'>
                  Stadium Description:{strStadiumDescription}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}
export default Stadium;
