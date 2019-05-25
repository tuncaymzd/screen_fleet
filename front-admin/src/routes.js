import TvIcon from '@material-ui/icons/Tv';
import FolderIcon from '@material-ui/icons/Folder';
import BuildIcon from '@material-ui/icons/Build';

import MainPage from './components/MainPage';
import ResourcesPage from './components/ResourcesPage';
import CompositionsBuilderPage from './components/CompositionsBuilderPage';

export default [
  {
    name: 'Tvs',
    link: '/tvs',
    icon: TvIcon,
    component: MainPage,
  },
  {
    name: 'Resources',
    link: '/resources',
    icon: FolderIcon,
    component: ResourcesPage,
  },
  {
    name: 'Composition Builder',
    link: '/composition-builder/:id',
    icon: BuildIcon,
    component: CompositionsBuilderPage,
  },
];
