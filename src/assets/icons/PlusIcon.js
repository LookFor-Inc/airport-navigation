import React from 'react'

/**
 * Иконка плюса
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка плюса
 */
function PlusIcon(props) {
  return (
    <svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.75 12H20.25'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 3.75V20.25'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default PlusIcon
