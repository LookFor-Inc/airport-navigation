import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PageLoading from '@/routes/PageLoading'
import ScrollToTop from '@/routes/ScrollToTop'
import FadingRoute from './FadingRoute'
import {routesTree as routes} from './tree'

const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'))

/**
 * Пути в браузере
 * @returns {JSX.Element} Возможные пути
 */
export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <ScrollToTop />
        <Switch>
          {routes.map(({exact, path, component, layout, entireFooter}) => (
            <FadingRoute
              key={path}
              exact={exact}
              path={path}
              component={component}
              layout={layout}
              entireFooter={entireFooter}
            />
          ))}
          <Route
            path='*'
            component={NotFoundPage}
          />
        </Switch>
      </Suspense>
    </Router>
  )
}
