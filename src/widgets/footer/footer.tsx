import NavigationMenu, { INavProps } from "../../shared/navigationMenu/navigationMenu.tsx";

const Footer =({navMenuLinks}:{navMenuLinks:INavProps['links']})=> {

  return (
    <footer>
        <NavigationMenu type={'footer'} links={navMenuLinks}/>
    </footer>
  )
};

export default Footer;