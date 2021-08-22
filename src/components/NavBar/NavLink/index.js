import React from 'react';
import { motion } from 'framer-motion';
import './NavLink.css';
import { scroller } from 'react-scroll';

const NavLink = ( { linkText, element, linkClicked } ) => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const scrollToElement = () => {
    linkClicked && linkClicked();
    scroller.scrollTo( element, { duration: 1000, delay: 100, smooth: true } );
  };

  return (
    <motion.li className="c-NavLink" variants={variants}>
      <span className="c-NavLink__text " onClick={() => scrollToElement()}>
        {linkText}
      </span>
    </motion.li>
  );
};

export default NavLink;
