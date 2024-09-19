import { NavLink } from 'react-router-dom';
import cl from './menuLink.module.scss';

export interface IMenuLinkProps {
  type: "dropdown" | "icon" | "simple";
  linkPath: string;
  LinkTextContent: string;
  innerLinks?: Array<{to: string, text: string}> | null;
}
const MenuLink = ({type, linkPath, LinkTextContent, innerLinks}:IMenuLinkProps)=> {
  if(type === "dropdown" && innerLinks){
    return <DropdownLink to={linkPath} text={LinkTextContent} innerLinks={innerLinks}/>
  }
  if(type === "icon"){
    return <IconLink to={linkPath} text={LinkTextContent}/>
  }
  if(type === "simple"){
    return <SimpleLink to={linkPath} text={LinkTextContent}/>
  }
}
const DropdownLink =({to, text, innerLinks}:{to: string, text: string, innerLinks:Array<{to: string, text: string}>})=> {
  const linkClass = ({isActive}:{isActive:boolean}) => isActive ? `${cl.dropDownLink_active}` : "";
  const dropDownLibClass = `uk-nav uk-dropdown-nav `

  function renderLinks(links: Array<{to: string, text: string}>){
    return links.map((link)=>(
      <li key={link.to}>
        <NavLink className={cl.dropDown__innerLink} to={link.to}>{link.text}</NavLink>
      </li>
    ))
  }
      
  return (
    <>
      <NavLink className={`${cl.link} ${cl.dropDownLink} ${linkClass}`} to={to}>{text}</NavLink>
      <div data-uk-dropdown="delay-hide: 200">
        <ul className={dropDownLibClass}>
          {renderLinks(innerLinks)}
        </ul>
      </div>
    </>
  )
}
const IconLink =({to, text}:{to: string, text: string})=> {
  const linkClass = ({isActive}:{isActive:boolean}) => isActive ? `${cl.iconLink_active}` : "";
  return (
    <NavLink className={`${cl.link} ${cl.iconLink} ${linkClass}`} to={to}>{text}</NavLink>
  )
}
const SimpleLink =({to, text}:{to: string, text: string})=> {
  const linkClass = ({isActive}:{isActive:boolean}) => isActive ? `${cl.link_active}` : "";
  return (
    <NavLink className={`${cl.link} ${cl.iconLink} ${linkClass}`} to={to}>{text}</NavLink>
  )
}

export default MenuLink;