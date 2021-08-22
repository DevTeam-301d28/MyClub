import React ,{ useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';
import './NavLogo.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0, withAuth0 } from '@auth0/auth0-react';

import {

  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap';


const NavLogo = ( { linkClicked,profileClicked } ) => {
  const [isProfileOpen, setProfileOpen] = useState( false );

  const scrollToTop = () => {
    linkClicked();
    scroll.scrollToTop();

    if ( window.location.pathname === '/profile' ){
      setProfileOpen( true );
    }
  };


  useEffect( () => {

  }, [] );
  const { logout } = useAuth0();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <UncontrolledDropdown nav>
        <DropdownToggle nav>
          <span className="c-NavLogo" onClick={() => scrollToTop()}>
          my<span className="c-NavLogo__accent">Club </span>
          </span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem hidden={isProfileOpen} to='/profile' onClick={() => profileClicked()} tag={Link}>
                        Profile
          </DropdownItem>
          <DropdownItem to='/fans-club' tag={Link}>
                        FansClub
          </DropdownItem>
          <DropdownItem to='/settings' tag={Link}>
                        Settings
          </DropdownItem>
          <DropdownItem onClick={() => logout( { returnTo: window.location.origin } )}>
                        logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>





    </motion.div>

  );
};
export default withAuth0( NavLogo );

