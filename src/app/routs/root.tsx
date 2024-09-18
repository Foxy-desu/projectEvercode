import { Outlet, Link } from 'react-router-dom';

const RootElement =()=> {
  return (
    <>
      <header>
        <h1>Header</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cases">Cases</Link>
          </li>
          <li>
            <Link to="carreer">Carreer</Link>
          </li>
          <li>
            <Link to="contacts">Contacts</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>Footer</footer>
    </>
  )
};

export default RootElement;