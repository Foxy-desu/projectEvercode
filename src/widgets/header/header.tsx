import { useState } from "react";
import BurgerBtn from "../../shared/burgerBtn/burgerBtn.tsx";
import MainLogo from "../../shared/logo/logo.tsx";
import NavigationMenu, { INavProps } from "../../shared/navigationMenu/navigationMenu.tsx";
import cl from './header.module.scss';
import { NavLink} from "react-router-dom";

const Header =({navMenuLinks}:{navMenuLinks:INavProps['links']})=>{
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  function toggleBurger(){
    setIsBurgerOpen(!isBurgerOpen);
  };
  function closeBurger(){
    setIsBurgerOpen(false);
  };
  const headerStyle = `${cl.header} ${isBurgerOpen? cl.header_expanded:''}`
  const logoLinkStyle = (isActive : boolean) => isActive ? `${cl.link} ${cl.active}` : `${cl.link}`;
  const mobNavStyle = `${cl.mobileNav} ${isBurgerOpen? cl.mobileNav_opened : ''}`;

  return (
    <header className={headerStyle}>
      <div className={`${cl.controlsWrap} ${cl.centered}`}>
        <NavLink className={({isActive})=>logoLinkStyle(isActive)} to={'/'}><MainLogo scheme={'dark'} alt={"Логотип компании Evercode lab"}/></NavLink>
        <div className={cl.navBarWrap}>
          <NavigationMenu type={'header'} links={navMenuLinks}/>
        </div>
        <div className={cl.btnWrap}>
          <BurgerBtn onClick={toggleBurger} isBurgerOpen={isBurgerOpen}/>
        </div>
      </div>
      <nav className={mobNavStyle}>
        <ul className={cl.navList}>
          {
            navMenuLinks.map((link)=>(
              <li key={link.text}>
                <NavLink className={cl.mobileLink} to={link.to} onClick={closeBurger}>{link.text}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
};

export default Header;