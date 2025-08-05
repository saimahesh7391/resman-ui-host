import { useRoutes } from 'react-router-dom';
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';
import SowDetails from './SOWDetail';
import NotFoundPage from '../../components/common/NotFoundPage';
export default function PublicRoutes() {
  // const name = 'Mahesh';

  // const handleSearch = (data: string) => {
  //   console.log('parent data', data);
  // };

  return useRoutes([
    { path: '/', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'contact', element: <Contact /> },
    // { path: 'testing', element: <Testing /> },
    { path: 'sow', element: <SowDetails /> },
    { path: '*', element: <NotFoundPage /> },
  ]);
}
