import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';

import DashboardLayoutTrainer from './layouts/dashboard/index2';
//
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import Membership from './pages/membership';
import Exercises from './pages/Exercises';
import Home from './pages/Home';
import Signupinfo from './pages/Signupinfo';
import Login2 from './pages/Login2';
import Blog2 from './pages/Blog2';
import User from './pages/User';
import Edituser from './pages/Edituser';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'exercises', element: <Exercises /> },
        { path: 'membership', element: <Membership /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'signinfo', element: <Signupinfo /> },
        { path: 'trainer/login', element: <Login2 /> }
      ],
    },
    {
      path: '/trainer',
      element: <DashboardLayoutTrainer />,
      children: [
        { path: 'profile', element: <Blog2 /> },
        { path: 'user', element: <User /> },
        { path: 'edituser/:id', element: <Edituser /> },
      ],
    },
  ]);
}
