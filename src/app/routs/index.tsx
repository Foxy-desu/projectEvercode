import { createHashRouter } from 'react-router-dom';
import RootElement from './root';
import Page404 from '../../pages/404/404';

export const router = createHashRouter([
  {
    path: '/',
    element: <RootElement />,
    errorElement: <Page404 />,
    children: [
      {
        path: '/',
        async lazy() {
          const Main = await import('../../pages/main/model/mainPageContainer');
          return { Component: Main.default };
        },
      },
      {
        path: 'products',
        async lazy() {
          const Products = await import('../../pages/products/products');
          return { Component: Products.default };
        },
      },
      {
        path: 'cases',
        async lazy() {
          const Cases = await import('../../pages/cases/cases');
          return { Component: Cases.default };
        },
      },
      {
        path: 'carreer',
        async lazy() {
          const Carreer = await import('../../pages/carreer/carreer');
          return { Component: Carreer.default };
        },
      },
      {
        path: 'contacts',
        async lazy() {
          const Contacts = await import('../../pages/contacts/contacts');
          return { Component: Contacts.default };
        },
      },
      {
        path: 'blog',
        async lazy() {
          const Blog = await import('../../pages/blog/blog');
          return { Component: Blog.default };
        },
      },
    ],
  },
]);
