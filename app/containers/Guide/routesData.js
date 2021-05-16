import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const data = [
  {
    id: 1,
    path: '/guide/admission',
    exact: true,
    component: lazy(() => import('containers/Guide/Admission')),
  },
  {
    id: 2,
    path: '/guide/financial-matters',
    exact: true,
    component: lazy(() => import('containers/Guide/FinancialMatters')),
  },
  {
    id: 3,
    path: '/guide/faq',
    exact: true,
    component: lazy(() => import('containers/Guide/FAQ')),
  },
  {
    id: 4,
    path: '/guide',
    exact: true,
    component: () => <Redirect to="/" />,
  },
];

export default data;
