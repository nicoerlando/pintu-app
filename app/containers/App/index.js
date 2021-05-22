import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage';
import Header from 'containers/Header';
import Footer from 'containers/Footer';

import GlobalStyle from '../../global-styles';
import routesData from './routesData';

export default function App() {
  // TODO: create loading component to put as fallback
  return (
    <div className="app">
      <Suspense fallback={null}>
        <Header />
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
        <Footer />
        <GlobalStyle />
      </Suspense>
    </div>
  );
}
