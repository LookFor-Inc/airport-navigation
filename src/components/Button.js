import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Общий компонент кнопки
 * @param {element} children Дочерние элементы
 * @param {string} size Размер кнопки
 * @param {string} color Цвет кнопки
 * @param {boolean} disabled Состояние блокировки
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Кнопка
 */
function Button({children, size, color, disabled, ...props}) {
  const classes = classNames('btn', {
    'btn-primary': color === 'primary',
    'btn-secondary text-primary': color === 'secondary',
    'btn-error': color === 'error',
    'py-0.5 px-1.5 text-xs': size === 'xs',
    'py-1 px-3 text-sm lg:text-base': size === 'sm',
    'px-8 py-3 md:py-4 md:px-10 md:text-lg': size === 'lg',
    'opacity-50': disabled
  }, props.className)

  return (
    <button
      {...props}
      type='button'
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

export default Button
