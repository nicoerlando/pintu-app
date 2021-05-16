import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage';

import routesData from './routesData';

export default function Guide() {
  // TODO: create loading component to put as fallback
  return (
    <div className="app">
      <Suspense fallback={null}>
        <Switch>
          {routesData.map(route => (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}
