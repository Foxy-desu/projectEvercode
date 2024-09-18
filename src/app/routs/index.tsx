import { createBrowserRouter } from "react-router-dom";
import RootElement from "./root";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    errorElement: <div>404 oops!</div>,
    children: [
      {path: "/", element: <div>Main</div>},
      { path: "products", element: <div>Products</div> },
      { path: "cases", element: <div>Cases</div> },
      { path: "carreer", element: <div>Carreer</div> },
      { path: "contacts", element: <div>Contacts</div> }
    ]
  }
]);

