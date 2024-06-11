import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import AdminPannel from '../pages/AdminPannel.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/admin-pannel',
        element: <AdminPannel />,
      }
    ]
  }
]);

export default router;
