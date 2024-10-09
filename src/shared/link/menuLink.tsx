import { NavLink } from 'react-router-dom';
import { breakLine } from '../utils/helpers';
import cl from './menuLink.module.scss';


export interface IMenuLink {
  type: "dropdown" | "icon" | "simple";
  linkPath: string;
  LinkTextContent: string;
  innerLinks?: Array<{to: string, text: string}> | null;
  location?: "header" | 'footer';
};
interface ILinkProps {
  to: string;
  text: string;
  location?: IMenuLink['location'];
};
interface IDLinkProps extends ILinkProps {
  innerLinks: Array<{to: string, text: string}>;
};

const MenuLink = ({type, linkPath, LinkTextContent, innerLinks, location="header"}:IMenuLink)=> {
  if(type === "dropdown" && innerLinks && location === "header"){
    return <DropdownLink to={linkPath} text={LinkTextContent} innerLinks={innerLinks}/>
  }
  if(type === "icon"){
    return <IconLink to={linkPath} text={LinkTextContent} location={location}/>
  }
  if(type === "simple" || (location === "footer" && type === 'dropdown')){
    return <PlainLink to={linkPath} text={LinkTextContent} location={location}/>
  }
};
const DropdownLink =({to, text, innerLinks}:IDLinkProps)=> {
  const activeClass = (isActive:boolean) => isActive ? cl.active : "";
  const dropDownLibClass = `uk-nav uk-dropdown-nav`;
  function renderLinks(links: Array<{to: string, text: string}>){
    return links.map((link)=>(
      <li key={link.to}>
        <NavLink className={cl.innerLink} to={link.to} tabIndex={0}>{breakLine(link.text)}</NavLink>
      </li>
    ))
  };

  return (
    <div className={cl.dropdownWrap}>
      <div className={cl.linkWrap}>
        <NavLink
          className={({isActive})=> {
            
            return `${cl.link} ${activeClass(isActive)} ${cl.dropDownLink}`
          }}
          to={to}
          >
            {text}
        </NavLink>
      </div>
      <div className={cl.dropListWrap} data-uk-dropdown={`delay-hide: 200; offset: -0; shift: false; flip:false`}>
        <ul className={dropDownLibClass}>
          {renderLinks(innerLinks)}
        </ul>
      </div>
    </div>
  )
};
const IconLink =({to, text, location}:ILinkProps)=> {
  const defaultClass = location === "header" ? cl.link : cl.link_simplified;
  const activeClass = (isActive:boolean) => isActive ? cl.active : "";
  return (
    <div style={{width: '100%'}}>
      <NavLink className={({isActive})=>`${defaultClass} ${activeClass(isActive)} ${cl.iconLink}`} to={to}>{text}</NavLink>
    </div>
  )
};
const PlainLink =({to, text, location}:ILinkProps)=> {
  const defaultClass = location === "header" ? cl.link : cl.link_simplified;
  const activeClass = (isActive:boolean) => isActive ? cl.active : "";
  return (
    <div style={{width: '100%'}}>
      <NavLink className={({isActive})=>`${defaultClass} ${activeClass(isActive)}`} to={to}>{text}</NavLink>
    </div>
  )
};

export default MenuLink;