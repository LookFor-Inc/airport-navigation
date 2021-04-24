import React from 'react'
import PropTypes from 'prop-types'

/**
 * Верхняя навигационная панель
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Навигационная панель
 */
function Navbar({children}) {
  return (
    <div className='fixed inset-x-0 top-0 z-30'>
      <div className='bg-white py-5 shadow-md'>
        {children}
      </div>
    </div>
  )
}

Navbar.propTypes = {
  children: PropTypes.node
}

export default Navbar
