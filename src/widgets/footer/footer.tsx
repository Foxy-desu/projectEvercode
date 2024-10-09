import { Link } from "react-router-dom";
import NavigationMenu, { INavProps } from "../../shared/navigationMenu/navigationMenu.tsx";
import cl from './footer.module.scss';
import MainLogo from "../../shared/logo/logo.tsx";
import SocialLink from "../../shared/socialLink/socialLink.tsx";
import { socialsList } from "../../app/appData/socials.ts";
import { parseHTML } from "../../shared/utils/helpers/index.ts";
import { useState } from "react";

const Footer =({navMenuLinks}:{navMenuLinks:INavProps['links']})=> {
  const [accordeonOpen, setAccordeonOpen] = useState(false);
  function toggleAccordion(){
    setAccordeonOpen(!accordeonOpen);
  }
  return (
    <footer className={cl.footer}>
      <div className={cl.content}>
        <div className={`${cl.footerPart} ${cl.companyWrap}`}>
          <CompanyBlock/>
        </div>
        <div className={`${cl.footerPart} ${cl.navWrap}`}>
          <h3 className={cl.title}>
            Меню
          </h3>
          <NavigationMenu
            type={'footer'}
            links={navMenuLinks}
          />
        </div>
        <div className={`${cl.footerPart} ${cl.contactsWrap}`}>
          <h3 className={cl.title}>
            Контанты
          </h3>
          <ContactsBlock/>
        </div>
        <div className={`${cl.footerPart} ${cl.socialsWrap}`}>
          <h3 className={cl.title}>
            Связь
          </h3>
          <SocialsBlock socials={socialsList}/>
          <div className={cl.companySmall}>
            <CompanyBlock/>
          </div>
        </div>
        <div className={cl.accordionWrap}>
        <Acordion isOpen={accordeonOpen} titleOpen="Свернуть меню" titleClosed="Развернуть меню" clickHandler={toggleAccordion}>
          <>
            <div className={cl.wrap}>
              <NavigationMenu
                type={'footer'}
                links={navMenuLinks}
            />
            </div>
          </>
        </Acordion>
      </div>
      </div>
    </footer>
  )
};
const CompanyBlock = ()=> {
  return (
    <ul className={`${cl.list} ${cl.companyInfo}`}>
      <li>
        <Link to={'/'} className={cl.logo}>
          <MainLogo scheme="light" alt="Evercode Lab"/>
        </Link>
      </li>
      <li>
        <a href="https://evercodelab.com/ru/Privacy/Privacy.pdf">Политика конфиденциальности</a>
      </li>
      <li>
        <a href="https://evercodelab.com/ru/Termsofuse/TermsofUse.pdf">Правила использования сайта</a>
      </li>
      <li>
        <p>© 2013 - 2024 Evercode Lab</p>
      </li>
    </ul>
  )
};
const ContactsBlock =()=>{
  return (
    <>
      <ul className={cl.list}>
        <li>
          <a href="mailto:sales@evercodelab.com">sales@evercodelab.com</a>
        </li>
        <li>
          <a href="mailto:job@evercodelab.com">job@evercodelab.com</a>
        </li>
      </ul>
      <p className={cl.location}>
      191186, Россия<br/>
      Санкт-Петербург<br/>
      ул Степана Разина, д.&nbsp;8а,<br/>
      литера А, помещ.&nbsp;13-Н
      </p>
    </>
  )
};
const SocialsBlock=({socials}:{socials:typeof socialsList})=>{
  return (
    <ul className={cl.socialList}>
      {socials.map((item)=> {
        return (
          <li className={cl.socialItem} key={item.id}>
            <SocialLink srText={item.text} iconSource={item.icon} href={item.url}/>
          </li>
        )
      })}
    </ul>
  )
}
// accordion

interface IAcordeon {
  isOpen: boolean;
  titleOpen: string;
  titleClosed: string;
  children: JSX.Element;
  clickHandler: ()=>void;
}
const Acordion =({children,titleOpen,titleClosed,isOpen, clickHandler}:IAcordeon)=> {
  const accordionContentStyle = `${cl.accordionContent} ${isOpen ? cl.accordionContentOpen : ''}`
  const accordionTitleStyle = `${cl.accordionTitle} ${isOpen ? cl.accordionTitleOpen : ''}`
  return (
    <div className={cl.accordion} >
      <h3 className={accordionTitleStyle} tabIndex={0} onClick={clickHandler}>
        {parseHTML(isOpen? titleOpen:titleClosed)}
        <span className={cl.decor}>{isOpen? '–':'+'}</span>
      </h3>
      <div className={accordionContentStyle}>
        {children}
      </div>
    </div>
  )
}
export default Footer;