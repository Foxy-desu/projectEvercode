import { Outlet } from 'react-router-dom';
import { navMenuLinks } from '../appData/navigationData';
import Header from '../../widgets/header/header.tsx';
import Footer from '../../widgets/footer/footer.tsx';

const RootElement =()=> {
  return (
    <>
      <Header navMenuLinks={navMenuLinks}/>
      <main>
        <Outlet/>
      </main>
      <Footer navMenuLinks={navMenuLinks}/>
    </>
  )
};

export default RootElement;