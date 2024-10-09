import light from '../../app/assets/img/svg/logo-light.svg';
import dark from '../../app/assets/img/svg/logo_dark.svg';
import cl from './logo.module.scss';

interface IMainLogo {
  scheme: 'light' | 'dark';
  alt: string;
}
const MainLogo = ({ scheme, alt }: IMainLogo) => {
  return <img className={cl.logo} src={scheme === 'light' ? light : dark} alt={alt} />;
};

export default MainLogo;
