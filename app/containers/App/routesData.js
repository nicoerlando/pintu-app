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
    path: '/carousel',
    exact: true,
    component: lazy(() => import('containers/CarouselPage')),
  },
  {
    id: 1,
    path: '/card',
    exact: true,
    component: lazy(() => import('containers/CardPage')),
  },
  {
    id: 1,
    path: '/login',
    exact: true,
    component: lazy(() => import('containers/LoginPage')),
  },
];

export default data;
