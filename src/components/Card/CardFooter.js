import React from 'react'
import PropTypes from 'prop-types'

/**
 * Компонент футера карточки
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Футер карточки
 */
function CardFooter({children}) {
  return (
    <div className='px-6 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10'>
      {children}
    </div>
  )
}

CardFooter.propTypes = {
  children: PropTypes.element
}

export default CardFooter
