import './App.css';
import React from 'react';
import Login from 'components/account';
import NavBar from 'components/NavBar';
import Profile from 'components/Profile';
import Footer from 'components/Footer/Login';
import WindowSizeProvider from './context/WindowSizeProvider';
import Loading from 'components/common/Loading/Loading';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from 'components/sections/Hero/Welcome';
import Team from 'components/sections/Team';
import Players from 'components/sections/Players';
import Events from 'components/sections/Events';
import Explore from 'components/sections/Explore';


class App extends React.Component {

  render() {
    console.log( 'app', this.props );
    return (
      <>
        <Router>
          <Loading>
            <Switch>
              {this.props.auth0.isAuthenticated ? (
                <WindowSizeProvider>
                  <div className='App'>
                    <NavBar />
                    <main>
                      <Route exact path='/'>
                        <Welcome />
                        <Team />
                        <Players />
                        <Events />
                        <Explore />
                      </Route>
                      <Route exact path='/profile'>
                        <Profile />
                      </Route>
                    </main>
                  </div>
                  <Footer />
                </WindowSizeProvider>
              ) : (
                <Login />
              )}
            </Switch>
          </Loading>
        </Router>
      </>
    );
  }
}
export default withAuth0( App );
