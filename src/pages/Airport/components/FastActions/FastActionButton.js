import React from 'react'
import PropTypes from 'prop-types'

/**
 * Быстрые действия
 * @param {*} Icon Иконка
 * @param {String} name Заголовок
 * @returns {JSX.Element} Элемент
 */
function FastActionsButton({Icon, name}) {
  return (
    <button className='self-start'>
      <div className='flex flex-col items-center'>
        <div className='min-width bg-gray-900 h-16 w-16 text-white text-center font-extrabold flex items-center
        justify-center rounded-full'>
          <Icon/>
        </div>
        <div className='flex flex-col items-center justify-center pt-2.5'>
          <span className='text-center text-gray-900 font-semibold text-xs'>
            {name}
          </span>
        </div>
      </div>
    </button>
  )
}

FastActionsButton.propTypes = {
  Icon: PropTypes.func,
  name: PropTypes.string
}

export default FastActionsButton
