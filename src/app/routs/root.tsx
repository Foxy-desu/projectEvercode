import { Outlet, useNavigation } from 'react-router-dom';
import { navMenuLinks } from '../appData/navigationData';
import loader from '../assets/img/svg/loader.svg';
import Header from '../../widgets/header/header.tsx';
import Footer from '../../widgets/footer/footer.tsx';
import CookieBannerContainer from '../../features/cookieBanner/model/cookieBannerContainer.tsx';
import cl from './root.module.scss';

const RootElement =()=> {
  const {state} = useNavigation();
  return (
    <>
      <Header navMenuLinks={navMenuLinks}/>
      <main className={cl.main}>
        {
          state === 'loading' && (
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#fff',
                opacity: 0.7
                }}>
              <img src={loader} alt="Загрузка страницы"/>
            </div>
          ) 
        }  
        <Outlet/>
      </main>
      <Footer navMenuLinks={navMenuLinks}/>
      <CookieBannerContainer/>
    </>
  )
};

export default RootElement;