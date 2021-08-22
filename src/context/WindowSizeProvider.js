import React, { useState, useEffect, createContext } from 'react';

export const windowSizeContext = createContext( {} );

const WindowSizeProvider = ( { children } ) => {
  const [size, setSize] = useState( [window.innerHeight, window.innerWidth] );

  const handleResize = () => {
    setSize( [window.innerHeight, window.innerWidth] );
  };

  useEffect( () => {
    window.addEventListener( 'resize', handleResize );
    return () => {
      window.removeEventListener( 'resize', handleResize );
    };
  }, [] );

  return (
    <windowSizeContext.Provider value={size}>
      {children}
    </windowSizeContext.Provider>
  );
};

export default WindowSizeProvider;
