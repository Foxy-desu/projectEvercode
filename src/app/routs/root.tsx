import { Outlet } from 'react-router-dom';
import { navMenuLinks } from '../appData/navigationData';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

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