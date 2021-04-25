import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Верхняя навигационная панель
 * @param {element} children Дочерние элементы
 * @param {string} className Классы стиля
 * @returns {JSX.Element} Навигационная панель
 */
function Navbar({children, className}) {
  const classes = classNames('fixed inset-x-0 top-0 z-30 transition-all shadow-sm')

  return (
    <div className={classes}>
      <div className='bg-white py-5'>
        {children}
      </div>
    </div>
  )
}

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Navbar
