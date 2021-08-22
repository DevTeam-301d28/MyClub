import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollOnView = ( { children, reverse } ) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect( () => {
    if ( inView ) {
      controls.start( 'visible' );
    }
  }, [controls, inView] );

  const variants = {
    hidden: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const variantsReverse = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={reverse ? variantsReverse : variants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollOnView;
