import React from 'react'
import PropTypes from 'prop-types'

/**
 * Базовый макет страницы
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Базовый макет
 */
function DefaultLayout({children}) {
  return (
    <>
      {children}
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default DefaultLayout
