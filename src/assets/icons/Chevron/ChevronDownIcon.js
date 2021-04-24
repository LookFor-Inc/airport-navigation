import React from 'react'

/**
 * Иконка стрелочки вниз
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Иконка стрелочки вниз
 */
function ChevronDownIcon(props) {
  return (
    <svg {...props} viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.2228 17.7467L2.32196 8.8459C1.89268 8.41662 1.89268 7.72065 2.32196 7.29142L3.36009 6.25328C3.78864
        5.82474 4.48319 5.82391 4.91274 6.25145L12 13.3055L19.0873 6.25145C19.5168 5.82391 20.2114 5.82474 20.6399
        6.25328L21.678 7.29142C22.1073 7.7207 22.1073 8.41667 21.678 8.8459L12.7773 17.7467C12.348 18.176 11.652 18.176
        11.2228 17.7467Z'
      />
    </svg>
  )
}

export default ChevronDownIcon
