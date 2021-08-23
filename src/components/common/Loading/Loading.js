import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import './loading.css';
import loading from 'components/assets/loading.gif';
class Loading extends React.Component {
  render() {
    return this.props.auth0.isLoading ? (
      <div className="image-container">
        <p className="image-holder">
          <img src={loading} alt='loading ...' />
        </p>
      </div>
    ) : this.props.auth0.error ? (
      <div className="image-container">
        <p className="image-holder">
          <img src={loading} alt='loading ...' />
          <div >Oops... {this.props.auth0.error.message}</div>
        </p>
      </div>

    ) : (
      this.props.children
    );
  }
}

export default withAuth0( Loading );
