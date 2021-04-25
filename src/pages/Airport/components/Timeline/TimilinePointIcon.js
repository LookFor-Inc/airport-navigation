import React from 'react'
import PropTypes from 'prop-types'

/**
 * Компонент с икнокой, который находится левее указателя текущего этапа
 * @param {function} Icon Компонент иконки
 * @returns {JSX.Element} Компонент икноки, подготовленный для вставки как элемент timeline
 */
function TimelinePointIcon({Icon}) {
  return (
    <div className="relative mr-12 text-gray-700">
      <Icon className='absolute -mt-3 top-1/2' />
    </div>
  )
}

TimelinePointIcon.propTypes = {
  Icon: PropTypes.func
}
export default TimelinePointIcon
