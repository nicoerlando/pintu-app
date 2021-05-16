import { lazy } from 'react';

const data = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: lazy(() => import('containers/HomePage')),
  },
  {
    id: 2,
    path: '/committee',
    exact: true,
    component: lazy(() => import('containers/Committee')),
  },
  {
    id: 3,
    path: '/events',
    exact: true,
    component: lazy(() => import('containers/Events')),
  },
  {
    id: 4,
    path: '/contact-us',
    exact: true,
    component: lazy(() => import('containers/ContactUs')),
  },
  {
    id: 5,
    path: '/adhoc',
    component: lazy(() => import('containers/Adhoc')),
  },
  {
    id: 6,
    path: '/guide',
    component: lazy(() => import('containers/Guide')),
  },
];

export default data;
