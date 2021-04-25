import React from 'react'

/**
 * Иконка галочки
 * @param {Object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка галочки
 */
function CheckIcon(props) {
  return (
    <svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.79289 19.1642L2.29288 12.6642C1.90237 12.2737 1.90237 11.6405 2.29288 11.25L3.70706 9.83573C4.09757
        9.44519 4.73077 9.44519 5.12128 9.83573L9.5 14.2144L18.8787 4.83573C19.2692 4.44522 19.9024 4.44522 20.2929
        4.83573L21.7071 6.24995C22.0976 6.64046 22.0976 7.27362 21.7071 7.66417L10.2071 19.1642C9.81656 19.5547 9.1834
        19.5547 8.79289 19.1642Z'
      />
    </svg>
  )
}

export default CheckIcon
