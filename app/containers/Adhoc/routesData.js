import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const data = [
  {
    id: 1,
    path: '/adhoc',
    exact: true,
    component: () => <Redirect to="/" />,
  },
  {
    id: 2,
    path: '/adhoc/gtd',
    component: lazy(() => import('containers/Adhoc/GTD')),
  },
  {
    id: 3,
    path: '/adhoc/icn',
    component: lazy(() => import('containers/Adhoc/ICN')),
  },
  {
    id: 4,
    path: '/adhoc/balik-kampoeng',
    component: lazy(() => import('containers/Adhoc/BK')),
  },
];

export default data;
