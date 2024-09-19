import { NavLink } from "react-router-dom"
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
  const linkState = ({ isActive }:{ isActive: boolean }) => isActive ? cl.active : "";

  return (
    <nav>
      {mainLogo
        ? <NavLink className={`${cl.link} ${linkState}`.trim()} to={'/'}><MainLogo scheme={mainLogo.scheme} alt={mainLogo.alt}/></NavLink>
        : false
      }
      <ul className={navMenuStyle}>
        {links.map((link)=>(
          <li key={link.to}>
            <MenuLink type={link.type} linkPath={link.to} LinkTextContent={link.text} innerLinks={link.inner || null}/>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default NavigationMenu;