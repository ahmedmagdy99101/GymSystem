// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Exercises',
    path: '/dashboard/exercises',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'membership',
    path: '/dashboard/membership',
    icon: getIcon('fa-solid:money-bill'),
  },
  {
    title: 'profile',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },

];

export default navConfig;
