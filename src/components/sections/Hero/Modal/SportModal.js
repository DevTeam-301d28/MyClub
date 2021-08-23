import {
  Modal,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import React, { Component } from 'react';
import './SportModal.css';
import { withAuth0 } from '@auth0/auth0-react';
import countriesdata from './res/countries.json';
import axios from 'axios';

class SportModal extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      currentStep: 1,
      leaguesData: [],
      allTeamsData: [],
      nickname:'',
      favouriteleague: '',
      favTeamName: '',
      showModal: true,
      selectedSport: '',
      user: this.props.userdata,
    };
  }

  handleChange = ( event ) => {
    const { name, value } = event.target;
    this.setState( {
      [name]: value,
    } );
  };

  handleSubmit = ( e ) => {
    e.preventDefault();
    const { nickname, favouriteleague, favTeamName,selectedSport } = this.state;
    //     alert( `Your registration detail: \n
    //              nickname: ${nickname} \n
    //              favouriteLeague: ${favouriteleague} \n
    //              selectedSport: ${selectedSport} \n
    //              favTeam: ${favTeamName}` );
    //     let test = {
    //       'nickname': '000000000',
    //       'favouriteleague' : '000000000',
    //       'favTeamName' : '000000000' ,
    //       'selectedSport': '00000000'

    //     };
    if ( this.props.auth0.isAuthenticated ) {
      const config = {
        method: 'patch',
        baseURL: 'http://localhost:3050',
        body: { nickname, favouriteleague, favTeamName,selectedSport } ,
        url: `/updateUser/${this.state.user._id}`,
      };
      axios( config )
        .then( ( response ) => {
          console.log( response );
        } ).catch( ( err ) => console.error( err ) );
    }
    this.handleClose();
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState( {
      currentStep: currentStep,
    } );
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState( {
      currentStep: currentStep,
    } );
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if ( currentStep !== 1 ) {
      return (
        <button
          className='btn btn-secondary'
          type='button'
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if ( currentStep < 3 && currentStep > 1 ) {
      return (
        <button
          className='btn btn-primary float-right'
          type='button'
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  sportSelected = ( sport ) => {
    this.setState( {
      selectedSport: sport,
    } );
    this._next();
  };
  handleClose = () => {
    this.setState( { showModal: false } );
  };

  //// Api Requests
  getLeaguesData = async( e ) => {
    e.preventDefault();
    if ( this.props.auth0.isAuthenticated ) {
      this.props.auth0
        .getIdTokenClaims()
        .then( ( token ) => {
          const jwt = token.__raw;
          const config = {
            headers: { Authorization: `Bearer ${jwt}` },
            method: 'get',
            baseURL: 'http://localhost:3050',
            url: `/leagues/${e.target.value}`,
          };
          axios( config )
            .then( ( response ) => {
              this.setState( {
                leaguesData: response.data,
              } );
              console.log( this.state.leaguesData );
            } ).catch( ( err ) => console.error( err ) );
        } )
        .catch( ( err ) => console.error( err ) );
    }
  };
  getTeamsData = async( e ) => {
    e.preventDefault();
    if ( this.props.auth0.isAuthenticated ) {
      this.props.auth0
        .getIdTokenClaims()
        .then( ( token ) => {
          const jwt = token.__raw;
          const config = {
            headers: { Authorization: `Bearer ${jwt}` },
            method: 'get',
            baseURL: 'http://localhost:3050',
            url: `/teams/${e.target.value}`,
          };
          axios( config )
            .then( ( response ) => {
              this.setState( {
                favouriteleague: e.target.value,
                allTeamsData: response.data,
              } );
            } ).catch( ( err ) => console.error( err ) );
        } )
        .catch( ( err ) => console.error( err ) );
    }
  };
  getOneTeamData = async( e ) => {
    e.preventDefault();
    await this.setState( {
      favTeamName: e.target.value,
    } );
    this._next();
    console.log( this.state.favTeamName, this.state.favouriteleague );
  };


  render() {
    return (
      <>
        {!this.props.auth0.loading && (
          <>
            <Modal className='modal' show={this.state.showModal}>
              <Modal.Header>
                <Modal.Title className='modal-title'>Account</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container fluid='md text-center'>
                  {/*
                   */}
                  <Row>
                    <Col>
                      <p>Step {this.state.currentStep} </p>

                      <form onSubmit={this.handleSubmit}>
                        <Step1
                          currentStep={this.state.currentStep}
                          sportSelected={this.sportSelected}
                        />
                        <Step2
                          currentStep={this.state.currentStep}
                          getLeaguesData={this.getLeaguesData}
                          leaguesData={this.state.leaguesData}
                          getTeamsData={this.getTeamsData}
                          allTeamsData={this.state.allTeamsData}
                          getOneTeamData={this.getOneTeamData}
                          favTeamName={this.state.favTeamName}
                        />
                        <Step3
                          currentStep={this.state.currentStep}
                          handleChange={this.handleChange}
                          nickname={this.state.nickname}
                        />
                      </form>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                {this.previousButton()}
                {this.nextButton()}
              </Modal.Footer>
            </Modal>
          </>
        )}
      </>
    );
  }
}

function Step1( props ) {
  if ( props.currentStep !== 1 ) {
    return null;
  }
  return (
    <>
      <Row>
        <Col>Select Your Favourite Sport </Col>
        <div className='w-100'>
          <br />
        </div>
        <Col>
          <img
            onClick={() => props.sportSelected( 'soccer' )}
            src='https://static.toiimg.com/thumb/msid-70661134,imgsize-761205,width-800,height-600,resizemode-75/70661134.jpg'
            className='card-img'
            alt='football'
          />
        </Col>
        <Col>
          <img
            onClick={() => props.sportSelected( 'basketball' )}
            src='https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg'
            className='card-img'
            alt='football'
          />
        </Col>
        <div className='w-100'>
          <br />
        </div>
      </Row>
    </>
  );
}

function Step2( props ) {
  if ( props.currentStep !== 2 ) {
    return null;
  }
  return (
    <>
      <div className='form-group'>
        <label>Select Your Favourite league & Team </label>
        <Row>
          <Col>
            <Dropdown>
              <DropdownButton id='dropdown-item-button' title={'countries'}>
                {countriesdata.map( ( element,index ) => (
                  <Dropdown.Item
                    as='button'
                    onClick={( e ) => props.getLeaguesData( e )}
                    value={element.name}
                    key={index}
                  >
                    {element.name}
                  </Dropdown.Item>
                ) )}
              </DropdownButton>
            </Dropdown>
          </Col>
          <Col>
            {( props.leaguesData.length > 0 && props.leaguesData[0] !== 'No Leagues' ) && (
              <Dropdown>
                <DropdownButton id='dropdown-item-button' title={'Leagues'}>
                  {props.leaguesData.length > 0 &&
                  props.leaguesData.map( ( element ) => (
                    <Dropdown.Item
                      as='button'
                      key={element.leagueId}
                      onClick={( e ) => props.getTeamsData( e )}
                      value={element.leagueId}
                    >
                      {element.leagueName}
                    </Dropdown.Item>
                  ) )}
                </DropdownButton>
              </Dropdown>

            )}
          </Col>
          <Col>
            {props.allTeamsData.length > 0 && (

              <Dropdown>
                <DropdownButton id='dropdown-item-button' title={'Teams'}>
                  <>
                    {props.allTeamsData.map( ( element,index ) => (
                      <Dropdown.Item
                        onClick={( e ) => props.getOneTeamData( e )}
                        as='button'
                        key={index}
                        value={element.teamNameDetails}
                      >
                        {element.teamNameDetails}
                      </Dropdown.Item>
                    ) )}
                  </>
                </DropdownButton>
              </Dropdown>

            )}
          </Col>
        </Row>
      </div>
    </>
  );
}

function Step3( props ) {
  if ( props.currentStep !== 3 ) {
    return null;
  }
  return (
    <>
      <div className='form-group'>
        <label htmlFor='FavouriteTeam'>Enter a Nickname</label>
        <input
          className='form-control'
          id='nickname'
          name='nickname'
          type='text'
          placeholder='Nickname'
          value={props.nickname}
          onChange={props.handleChange}
        />
      </div>
      <button className='btn btn-success btn-block'>Submit</button>
    </>
  );
}

export default withAuth0( SportModal );
