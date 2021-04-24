import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Компонент(контент) для задания структуры веб-страницы
 * @param {JSX.Element} children Дочерний компонент для отображения содержимого
 * @param {string} className дополнительные стили
 * @returns {JSX.Element} Компонент контента
 */
function Content({children, className}) {
  const classes = classNames('container mx-auto py-6 px-4 sm:px-6 lg:px-8 max-w-7xl', className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Content
