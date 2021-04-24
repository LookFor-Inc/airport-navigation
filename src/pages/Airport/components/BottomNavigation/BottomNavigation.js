import React from 'react'
import PropTypes from 'prop-types'

/**
 * Нижняя навигационная панель
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Навигационная панель
 */
function BottomNavigation({children}) {
  return (
    <div className='absolute fixed inset-x-0 bottom-0 z-30'>
      <div className='bg-white py-1 shadow-lg'>
        {children}
      </div>
    </div>
  )
}

BottomNavigation.propTypes = {
  children: PropTypes.node
}

export default BottomNavigation
