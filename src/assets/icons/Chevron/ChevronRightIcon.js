import React from 'react'

/**
 * Иконка стрелочки вправо
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка стрелочки вправо
 */
function ChevronRightIcon(props) {
  return (
    <svg {...props} width='14' height='14' viewBox='0 0 14 14' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path d='M10.3523 7.45338L5.16012 12.6455C4.90971 12.8959 4.50373 12.8959 4.25334
      12.6455L3.64776 12.0399C3.39778 11.7899 3.3973 11.3848 3.6467 11.1342L7.76157 6.99998L3.6467
      2.86576C3.3973 2.61518 3.39778 2.21003 3.64776 1.96004L4.25334 1.35447C4.50376 1.10405
      4.90974 1.10405 5.16012 1.35447L10.3523 6.5466C10.6027 6.79699 10.6027 7.20297 10.3523 7.45338Z' />
    </svg>
  )
}

export default ChevronRightIcon
