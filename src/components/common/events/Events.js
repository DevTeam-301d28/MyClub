import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './AboutMeSection.css';
import ScrollOnView from '../common/ScrollOnView';
import { withAuth0 } from '@auth0/auth0-react';

class Events extends Component {

  render() {
    return (
      <>
        <h2 className="section__title">About</h2>
        <Element name="scrollToLeague" />
        <section className="c-AboutSection">
          <ScrollOnView reverse>
            <div className="c-AboutMeSection__content flex flex-center">
              <div>
                <h2 className="c-AboutMeSection__title">WELCOME</h2>
                <p className="c-AboutMeSection__paragraph">
              My name is Odeh and I enjoy creating responsive and
              user-friendly websites.I discovered how fullfilling the development process can be and
              started learning more about web development ever since.
                </p>
                <h2 className="c-AboutMeSection__subtitle">SKILLS</h2>

              </div>
            </div>
          </ScrollOnView>
        </section>
      </>
    );
  }
}

export default withAuth0( Events );
