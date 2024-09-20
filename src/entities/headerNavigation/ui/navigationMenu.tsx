import { NavLink, NavLinkRenderProps } from "react-router-dom"
import MainLogo from "../../../shared/logo/logo";
import cl from './navigationMenu.module.scss';
import MenuLink, { IMenuLinkProps } from "../../../shared/link/menuLink";

export interface INavProps {
  type: "footer" | "header";
  links: Array<{to: string, text: string, type: IMenuLinkProps['type']; inner?: Array<{to: string, text: string}>}>;
  mainLogo?: {scheme: "light"|"dark"; alt: string} | null; 
}

const NavigationMenu =({type,links,mainLogo}:INavProps)=>{
  const navMenuStyle = type === "header" ? cl.headerList : cl.footerList;
  const linkState = (isActive : NavLinkRenderProps) => isActive ? `${cl.link} ${cl.active}` : `${cl.link}`;

  return (
    <nav className={cl.navMenu}>
      {mainLogo
        ? <NavLink className={linkState} to={'/'}><MainLogo scheme={mainLogo.scheme} alt={mainLogo.alt}/></NavLink>
        : false
      }
      <ul className={navMenuStyle}>
        {links.map((link)=>(
          <li className={cl.navItem} key={link.to}>
            <MenuLink type={link.type} linkPath={link.to} LinkTextContent={link.text} innerLinks={link.inner || null} location={type}/>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default NavigationMenu;