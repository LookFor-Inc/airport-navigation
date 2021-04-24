import React from 'react'

/**
 * Иконка стрелочки вправо
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка стрелочки вправо
 */
function ChevronRightIcon(props) {
  return (
    <svg {...props} width='14' height='20' viewBox='0 0 14 20' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12.7466 10.7772L3.84572 19.678C3.41644 20.1073 2.72047 20.1073 2.29124 19.678L1.2531 18.6399C0.824555
      18.2114 0.823731 17.5168 1.25127 17.0873L8.30535 9.99998L1.25127 2.91274C0.823731 2.48319 0.824555 1.78864 1.2531
       1.36009L2.29124 0.321959C2.72051 -0.10732 3.41648 -0.10732 3.84572 0.321959L12.7465 9.22276C13.1758 9.65199
       13.1758 10.348 12.7466 10.7772Z'/>
    </svg>

  )
}

export default ChevronRightIcon
