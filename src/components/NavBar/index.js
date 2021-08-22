import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavLogo from './NavLogo';
import NavLink from './NavLink';
import './NavBar.css';

const MainNavBar = () => {
  const Homelinks = [
    { linkText: 'Team', element: 'scrollToTeam' },
    { linkText: 'Players', element: 'scrollToLatestPlayers' },
    { linkText: 'Events', element: 'scrollToEvents' },
    { linkText: 'Explore', element: 'scrollToExplore' }
  ];

  const ViewsLinks = [
    { linkText: 'Club', element: 'scrollToClub' },
    { linkText: 'Settings', element: 'scrollToLatestSettings' },
    { linkText: 'logout', element: 'scrollTologout' }
  ];
  const [isMobileOpen, setIsMobileOpen] = useState( false );
  const [isProfileOpen, setProfileOpen] = useState( false );
  const [arrayOflinks, setarrayOflinks] = useState( Homelinks );

  const linkClicked = () => {
    setIsMobileOpen( false );
  };
  const profileClicked = () => {
    setProfileOpen( true );
    setarrayOflinks( ViewsLinks );
  };
  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };






  useEffect( () => {
    console.log( );
    if ( window.location.pathname === '/profile' ){
      console.log( isProfileOpen );
      setarrayOflinks( ViewsLinks );
    }
  }, [] );


  return (

    <>
      <header>
        <nav className={'flex flex-space-btw h-full '}>
          <div className="c-NavBar__left">
            <NavLogo linkClicked={linkClicked} profileClicked={profileClicked}/>
          </div>
          <div className="c-NavBar__right">
            <GiHamburgerMenu
              onClick={() => setIsMobileOpen( !isMobileOpen )}
              className="c-NavBarUp"
              size={25}
            />
            <br/>
            <motion.ul
              className="c-NavBar__list flex"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {arrayOflinks.map( ( link ) => {
                return (
                  <NavLink
                    key={link.linkText}
                    linkText={link.linkText}
                    element={link.element}
                  />
                );
              } )}
            </motion.ul>
          </div>
        </nav>
        <div
          className={`c-NavBar__mobile ${isMobileOpen && 'c-Mobile-visible'}`}
        >
          <ul className="flex flex-col flex-center h-full">
            {arrayOflinks.map( ( link ) => {
              return (
                <NavLink
                  key={link.linkText}
                  linkText={link.linkText}
                  element={link.element}
                  linkClicked={linkClicked}
                />
              );
            } )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default MainNavBar;
