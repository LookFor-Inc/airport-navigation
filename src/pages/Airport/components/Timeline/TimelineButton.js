import React, {createElement} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 *
 * @param {JSXElement} Icon Иконка(компонент)
 * @param {string} text Текст для кнопки
 * @param {string} color Цвет иконки
 * @returns {JSX.Element} Компонент кнопки с текстом и иконкой
 */
function TimelineButton({icon, text, color, ...props}) {
  const classes = classNames(
    'flex items-center justify-end font-bold text-gray-800 rounded-md p-1 hover:bg-gray-100',
    props.className)

  const iconClasses = classNames('ml-2 h-4 w-3', {
    'text-error': color === 'error',
    'text-primary': color === 'primary'
  })

  return (
    <button
      {...props}
      className={classes}
      type='button'
    >
      {text}
      {createElement(icon, {className: iconClasses})}
    </button>
  )
}

TimelineButton.propTypes = {
  icon: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.oneOf(['error', 'primary']),
  className: PropTypes.string
}

export default TimelineButton
