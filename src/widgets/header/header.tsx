import BurgerBtn from "../../shared/burgerBtn/burgerBtn.tsx";
import MainLogo from "../../shared/logo/logo.tsx";
import NavigationMenu, { INavProps } from "../../shared/navigationMenu/navigationMenu.tsx";
import { NavLink} from "react-router-dom";
import cl from './header.module.scss';

interface IHeader {
  navMenuLinks: INavProps['links'];
  isBurgerOpen: boolean;
  closeBurger: ()=>void;
  toggleBurger: ()=>void;
}
const Header =({
  navMenuLinks,
  isBurgerOpen,
  closeBurger,
  toggleBurger}:IHeader)=>{

  const headerStyle = `${cl.header} ${isBurgerOpen? cl.header_expanded:''}`;
  const mobNavStyle = `${cl.mobileNav} ${isBurgerOpen? cl.mobileNav_opened : ''}`;
  function renderNavLinks(navLinks: INavProps['links']){
    return (
      navLinks.map((link)=>(
        <li key={link.text}>
          <NavLink className={cl.mobileLink} to={link.to} onClick={closeBurger}>{link.text}</NavLink>
        </li>
      ))
    )
  }

  return (
    <header className={headerStyle}>
      <div className={cl.controlsWrap}>
        <HeaderLogo isBurgerOpen={isBurgerOpen} handleClick={closeBurger}/>
        <div className={cl.navBarWrap}>
          <NavigationMenu type={'header'} links={navMenuLinks}/>
        </div>
        <div className={cl.btnWrap}>
          <BurgerBtn onClick={toggleBurger} isBurgerOpen={isBurgerOpen}/>
        </div>
      </div>
      <nav className={mobNavStyle}>
        <ul className={cl.navList}>
          {renderNavLinks(navMenuLinks)}
        </ul>
      </nav>
    </header>
  )
};

interface IHeaderLogo {
  isBurgerOpen: boolean;
  handleClick: ()=>void;
}
const HeaderLogo =({isBurgerOpen, handleClick}:IHeaderLogo)=>{
  const logoLinkStyle = (isActive : boolean) => isActive ? `${cl.link} ${cl.active}` : `${cl.link}`;

  return (
    <NavLink
      className={({isActive})=> isBurgerOpen? logoLinkStyle(false):logoLinkStyle(isActive)}
      to={'/'}
      onClick={handleClick}>
      <MainLogo scheme={'dark'} alt={"Логотип компании Evercode lab"}/>
    </NavLink>
  )
}

export default Header;