import React from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

/**
 * Обёртка для пути
 * @param {JSX.Element|function} Component Компонент для отображения
 * @param {JSX.Element|function} Layout Общий макет для страницы
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} 'Затухающий' путь
 */
function FadingRoute({
  component: Component, layout: Layout, ...props
}) {
  return (
    <Route
      {...props}
      render={routeProps => (
        <Layout>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  )
}

FadingRoute.propTypes = {
  component: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.func]).isRequired,
  layout: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.func]).isRequired
}

export default FadingRoute
