import React, {createElement} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Кнопкадля отображения дополнительной информации внутри себя
 * @param {function} Icon Иконка
 * @param {string} text Текст кнопки
 * @param {string|function} extraData Дополнительные текст илииконка
 * @param {string} color Название цвета
 * @param {object} props Дополнительные параметры
 * @returns {JSX.Element} Кнопка, содержащяя внтури себя доп информацию
 * @constructor
 */
function ExtraInfoButton({Icon, text, extraData, color, ...props}) {
  const classes = classNames('flex justify-between btn select-none', {
    'bg-green-500': color === 'ok',
    'btn-error': color === 'error',
    'bg-pink-500 hover:bg-pink-700': color === 'pink',
    'space-x-4': typeof extraData === 'string'
  }, props.className)

  const timeClasses = classNames('text-sm', {
    'text-white': color === 'ok'
  })

  return (
    <button className={classes}>
      <div className='flex space-x-4'>
        <Icon className='text-white' />
        <span className='text-sm text-white text-center'>{text}</span>
      </div>
      <div className='flex'>
        {typeof extraData === 'string' && <span className={timeClasses}>{extraData}</span>}
        {typeof extraData === 'function' && createElement(extraData, {className: 'text-white'})}
      </div>
    </button>
  )
}

ExtraInfoButton.propTypes = {
  Icon: PropTypes.func,
  text: PropTypes.string,
  extraData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  color: PropTypes.string,
  className: PropTypes.string
}

export default ExtraInfoButton
