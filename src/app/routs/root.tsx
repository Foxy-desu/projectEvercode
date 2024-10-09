import { Outlet, useNavigation } from 'react-router-dom';
import { navMenuLinks } from '../appData/navigationData';
import { useViewportWidth } from '../../shared/utils/hooks/getViewportWidth.ts';
import { WidthContext } from '../context/widthContext.ts';
import Footer from '../../widgets/footer/footer.tsx';
import CookieBannerContainer from '../../features/cookieBanner/model/cookieBannerContainer.tsx';
import Loader from '../../shared/loader/loader.tsx';
import HeaderContainer from '../../widgets/header/model/headerContainer.tsx';
import cl from './root.module.scss';

const RootElement =()=> {
  const viewportWidthData = useViewportWidth();
  const {state} = useNavigation();
  return (
    <WidthContext.Provider value={viewportWidthData}>
      <HeaderContainer navMenuLinks={navMenuLinks}/>
      <main className={cl.main}>
        {state === 'loading' && <Loader/>}  
        <Outlet/>
      </main>
      <Footer navMenuLinks={navMenuLinks}/>
      <CookieBannerContainer/>
    </WidthContext.Provider>
  )
};

export default RootElement;