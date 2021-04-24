import React from 'react'

/**
 * Иконка минуса
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка минуса
 */
function MinusIcon(props) {
  return (
    <svg {...props} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.75 12H20.25'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default MinusIcon
