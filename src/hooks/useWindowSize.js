import { useContext } from 'react';
import { windowSizeContext } from '../context/WindowSizeProvider';

const useWindowSize = () => {
  const size = useContext( windowSizeContext );
  return size;
};

export default useWindowSize;
