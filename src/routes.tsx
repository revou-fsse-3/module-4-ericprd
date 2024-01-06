import { Body } from "components/layouts/Body";
import { Home, Login, Register } from "pages";
import { createBrowserRouter } from "react-router-dom";

const authRoutes = {
  path: 'auth',
  children: [
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'login',
      element: <Login />,
    },
  ]
}

const mainRoutes = {
  children: [
    {
      path: '/',
      element: <Home />,
    },
  ]
}

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      authRoutes,
      mainRoutes,
    ],
  },
  {
    path: '*',
    element: <p>404 Error</p>,
  },
]);
