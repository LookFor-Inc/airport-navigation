import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import CheckIcon from '@/assets/icons/CheckIcon'

/**
 * Компонент с точкой и линией timeline
 * @param {[string]} type Тип этапа прохождения
 * @param {number} id Номер этапа
 * @param {number} length Количество этапов
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Компонент с указателем текущего и пройденных этаповы
 * @constructor
 */
function TimelinePoint({type, id, length, ...props}) {
  const pointClasses = classNames('w-6 h-6 top-1/2 -mt-3 rounded-full absolute', {
    'bg-primary': type === 'active',
    'bg-error': type === 'error',
    'bg-gray-400': type === 'disable',
    'flex items-center justify-center bg-green-500': type === 'checked'
  }, props.className)

  const animationClasses = classNames('animate-ping inline-flex h-6 w-6 rounded-full opacity-50', {
    'bg-primary': type === 'active',
    'bg-error': type === 'error'
  })

  const lineClasses = classNames('absolute w-1 bg-gray-400 pointer-events-none', {
    'h-1/2 bottom-0': id === 1,
    'h-1/2 top-0': id === length,
    'h-full': id !== length && id !== 1
  })

  return (
    <>
      <div className="relative mr-5">
        <div className="h-full w-6 flex items-center justify-center">
          <div className={lineClasses}/>
        </div>
        <div className={pointClasses}>
          {type === 'active' || type === 'error' && <span className={animationClasses}/>}
          {type === 'checked' && <CheckIcon className='w-4 h-4 text-gray-100' />}
        </div>
      </div>
    </>
  )
}

TimelinePoint.propTypes = {
  type: PropTypes.oneOf(['checked', 'active', 'disable', 'error']),
  className: PropTypes.string,
  id: PropTypes.number,
  length: PropTypes.number
}

export default TimelinePoint
