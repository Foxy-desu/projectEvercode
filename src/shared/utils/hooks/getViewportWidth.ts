import { useState, useEffect } from "react";
import { debounce } from 'lodash';

export const useViewportWidth =()=> {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(()=> {
    const handleResize = debounce(()=> {
      const inner = window.innerWidth;
      const client = document.documentElement.clientWidth;
      if (inner < client) {
        setWidth(client);
      } else {
        setWidth(inner);
      }
      setWidth(window.innerWidth)
    }, 100);
    window.addEventListener('resize', handleResize);
    return ()=> {
      handleResize.cancel();
      window.removeEventListener('resize', handleResize)
    };
  },[]);

  return width;
}