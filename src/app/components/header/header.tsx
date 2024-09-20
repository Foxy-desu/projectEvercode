import NavigationMenu, { INavProps } from "../../../entities/headerNavigation/ui/navigationMenu"
import cl from './header.module.scss';

const Header =({navMenuLinks}:{navMenuLinks:INavProps['links']})=>{

  return (
    <header className={cl.header}>
      <NavigationMenu type={'header'} links={navMenuLinks} mainLogo={{scheme: "dark", alt:'Логотип компании Evercode lab'}}/>
    </header>
  )
};

export default Header;