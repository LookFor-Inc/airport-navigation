import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Компонент содержимого карточки
 * @param {element} children Дочерние элементы
 * @param {string} size Размер отступа
 * @returns {JSX.Element} Содержимое карточки
 */
function CardBody({children, size}) {
  const classes = classNames({
    'p-7': size === 'md',
    'px-6 py-8 sm:px-10': size === 'lg'
  }, 'h-full')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

CardBody.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

export default CardBody
