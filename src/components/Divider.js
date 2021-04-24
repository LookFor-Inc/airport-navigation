import React from 'react'
import PropTypes from 'prop-types'

/**
 * Компонент разделителя
 * @param {string} text Текст в центре разделителя (optional)
 * @returns {JSX.Element} Разделитель
 */
function Divider({text}) {
  return (
    <div className='relative my-6'>
      <div className='absolute inset-0 flex items-center'>
        <div className='w-full border-t border-gray-300' />
      </div>
      {text &&
      <div className='relative flex justify-center text-sm leading-5'>
        <span className='px-2 text-gray-500 bg-white'>
          {text}
        </span>
      </div>
      }
    </div>
  )
}

Divider.propTypes = {
  text: PropTypes.string
}

export default Divider
