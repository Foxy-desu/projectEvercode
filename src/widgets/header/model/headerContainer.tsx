import { useContext, useEffect, useState } from "react";
import { INavProps } from "../../../shared/navigationMenu/navigationMenu";
import { WidthContext } from "../../../app/context/widthContext";
import { blockScroll } from "../../../shared/utils/helpers";
import Header from "../header";

const HeaderContainer =({navMenuLinks}:{navMenuLinks:INavProps['links']})=> {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const viewportWidth = useContext(WidthContext);
  
  function toggleBurger(){
    setIsBurgerOpen(!isBurgerOpen);
  };
  
  function closeBurger(){
    setIsBurgerOpen(false);
  };

  useEffect(()=>{
    //block scroll only if the burger is opened and the viewport has certain width
    const isOpen = isBurgerOpen && (viewportWidth.width <= 1000);
    blockScroll(isOpen);
  }, [isBurgerOpen, viewportWidth])

  return <Header
    navMenuLinks={navMenuLinks}
    isBurgerOpen={isBurgerOpen}
    closeBurger={closeBurger}
    toggleBurger={toggleBurger}
  />
};

export default HeaderContainer;