import { useState, useEffect } from "react";
import { debounce } from 'lodash';

export const useViewportWidth =()=> {

  const [widthData, setWidth] = useState(getWidthData);
  function getWidthData(){
    const innerWidth = window.innerWidth;
    const clientWidth = document.documentElement.clientWidth;
    const bodyWidth = document.getElementsByTagName('body')[0].clientWidth;

    if(innerWidth && clientWidth){
      const viewportWidth = Math.min(innerWidth, clientWidth);
      const diff = innerWidth - clientWidth;
      return {width: viewportWidth, diff}
    } else if(innerWidth) {
      return {width: innerWidth, diff: 0}
    } else if(clientWidth){
      return {width: clientWidth, diff: 0}
    } else {
      return {width: bodyWidth, diff: 0}
    }
  }

  useEffect(()=> {
    const handleResize = debounce(()=> {
      setWidth(getWidthData())
    }, 100);
    window.addEventListener('resize', handleResize);
    return ()=> {
      handleResize.cancel();
      window.removeEventListener('resize', handleResize)
    };
  },[]);

  useEffect(()=> {
    console.log(widthData)
  }, [widthData])

  return widthData;
}