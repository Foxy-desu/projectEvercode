import light from '../../app/assets/img/svg/logo-light.svg';
import dark from '../../app/assets/img/svg/logo_dark.svg';
import cl from './logo.module.scss';

interface IMainLogoProps {
  scheme: "light" | "dark";
  alt: string;  // alt text for screen readers or SEO purpose
}
const MainLogo =({scheme, alt}:IMainLogoProps)=>{

  return (
    <img className={cl.logo} src={scheme === "light"? light:dark} alt={alt} loading='lazy'/>
  )
};

export default MainLogo;