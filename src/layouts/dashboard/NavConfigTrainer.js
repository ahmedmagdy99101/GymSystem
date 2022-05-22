// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfigTrainer = [
  {
    title: 'profile',
    path: '/trainer/profile',
    icon: getIcon('fa-solid:money-bill'),
  },
  {
    title: 'user',
    path: '/trainer/user',
    icon: getIcon('eva:file-text-fill'),
  },

];

export default navConfigTrainer;
