import { Link } from "react-router-dom";
import NavigationMenu, { INavProps } from "../../shared/navigationMenu/navigationMenu.tsx";
import cl from './footer.module.scss';
import MainLogo from "../../shared/logo/logo.tsx";

const Footer =({navMenuLinks}:{navMenuLinks:INavProps['links']})=> {

  return (
    <footer className={cl.footer}>
      <div className={cl.content}>
        <div className={cl.footerPart}>
          <ul className={cl.list}>
            <li>
              <Link to={'/'}>
                <MainLogo scheme="light" alt="Evercode Lab"/>
              </Link>
            </li>
            <li>
              <a href="https://evercodelab.com/ru/Privacy/Privacy.pdf">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="https://evercodelab.com/ru/Termsofuse/TermsofUse.pdf">Правила использования сайта</a>
            </li>
          </ul>
          <p>© 2013 - 2024 Evercode Lab</p>
        </div>
      </div>
      <div className={cl.footerPart}>
        <h3 className={cl.title}>
          Меню
        </h3>
        <NavigationMenu type={'footer'} links={navMenuLinks}/>
      </div>
      <div className={cl.footerPart}>
        <h3 className={cl.title}>
          Контанты
        </h3>
        <ul className={cl.list}>
          <li>
            <a href="mailto:sales@evercodelab.com">sales@evercodelab.com</a>
          </li>
          <li>
            <a href="mailto:job@evercodelab.com">job@evercodelab.com</a>
          </li>
        </ul>
      </div>
      <div className={cl.footerPart}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;