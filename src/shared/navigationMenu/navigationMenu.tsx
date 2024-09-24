import cl from './navigationMenu.module.scss';
import MenuLink, { IMenuLinkProps } from "../link/menuLink";

export interface INavProps {
  type: "footer" | "header";
  links: Array<{to: string, text: string, type: IMenuLinkProps['type']; inner?: Array<{to: string, text: string}>}>;
}

const NavigationMenu =({type,links}:INavProps)=>{
  const navMenuStyle = `${type === "header" ? cl.headerList : cl.footerList} ${cl.navList}`;

  return (
    <nav className={cl.navBar}>
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