import React from 'react';
import { Element } from 'react-scroll';
import './ProfileView.css';
import ScrollOnView from 'components/common/ScrollOnView';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, Container, Row, Col } from 'reactstrap';
import Loading from 'components/common/Loading/Loading';

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

  }
  getage = ( dateOfBirth ) => {
    let diff = Date.now() - dateOfBirth.getTime();
    let age = new Date( diff );

    return Math.abs( age.getUTCFullYear() - 1970 );
  }

  formatUserName( username ){
    let formatedName =  username;
    if ( username.indexOf( '@' ) !== -1 ){
      formatedName = username.substr( 0, username.indexOf( '@' ) )
        .replace( /[^\w\s]/gi, ' ' )
        .replace( /[0-9]/g, '' )
        .toUpperCase();
    }else
    {
      formatedName = username.replace( /[^\w\s/0-9]/gi, ' ' )
        .replace( /[0-9]/g, '' )
        .toUpperCase();
    }
    return formatedName;
  }
  render() {
    const { user, isLoading } = this.props.auth0;

    if ( isLoading ) {
      return <Loading/>;
    }else{
      return (
        <>
          <Element name="scrollToProfile" />
          <section className="c-ProfileSection">
            <ScrollOnView reverse>
              <Container>
                <Row>
                  <Col>
                    <Card className='card-profile shadow mt--300 px-8' style={{ width: '100%' }}>
                      <Row className='justify-content-center'>
                        <Col className='order-lg-2 card-profile-image' >
                          <a href='#pablo' onClick={( e ) => e.preventDefault()}>
                            <img
                              alt='...'
                              className='rounded-circle mt-4'
                              src={user.picture}

                            />
                          </a>
                        </Col>
                      </Row>
                      <div className='text-center mt-5'>
                        <h3>
                          {this.formatUserName( user.nickname )}
                          <span className='font-weight-light'>, {this.getage( new Date( 1990, 1, 14 ) )}</span>
                        </h3>
                        <div className='h6 font-weight-300'>
                          <i className='ni location_pin mr-2' />
                      Amman, Jordan
                        </div>
                        <div className='h6 mt-4'>
                          <i className='ni business_briefcase-24 mr-2' />
                          {this.formatUserName( user.email )}
                        </div>
                        <div>
                          <i className='ni education_hat mr-2' />
                          {user.email}
                        </div>
                      </div>
                      <div className='mt-5 py-5 border-top text-center'>
                        <Row className='justify-content-center'>
                        </Row>
                      </div>

                    </Card>
                  </Col>
                </Row>
              </Container>
            </ScrollOnView>
          </section>
        </>
      );
    }

  }
}
export default withAuth0( Profile );
