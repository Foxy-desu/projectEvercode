import { parseHTML } from '../utils/helpers';
import cl from './cardWithLogo.module.scss';

interface ICardWithLogoProps {
  logo: string;
  title: string;
  link: string;
}
const CardWithLogo =({logo, title, link}:ICardWithLogoProps)=> {
  const logoStyle = `${cl.logo} ${cl['logo_'+logo]}`;
  return (
    <a className={cl.card} href={link}>
      <div className={cl.logoWrap}>
       <div className={logoStyle}/>
      </div>
      <h3 className={cl.title}>{parseHTML(title)}</h3>
    </a>
  )
};

export default CardWithLogo;