import { useRoutes } from 'react-router-dom';
import { ForgotPassword } from './pages/ForgotPassword';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';

export default function AuthRoutes() {
  return useRoutes([
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'signup',
      element: <Signup />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
  ]);
}
