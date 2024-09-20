import NavigationMenu, { INavProps } from "../../../entities/headerNavigation/ui/navigationMenu"

const Footer =({navMenuLinks}:{navMenuLinks:INavProps['links']})=> {

  return (
    <footer>
        <NavigationMenu type={'footer'} links={navMenuLinks}/>
    </footer>
  )
};

export default Footer;