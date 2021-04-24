import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Общий компонент поля ввода
 * @param {string} ref Ссылка
 * @param {string} type Тип поля ввода
 * @param {string} size Размер поля ввода
 * @param {string} placeholder Заполнитель поля ввода
 * @param {boolean} disabled Состояние блокировки
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Поле ввода
 */
function Input({ref, type = 'text', placeholder, disabled, size, ...props}) {
  const classes = classNames('input', {
    'py-1.5 px-3 text-sm': size === 'sm'
  }, props.className)

  return (
    <input
      {...props}
      ref={ref}
      type={type}
      className={classes}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}

Input.propTypes = {
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
}

export default Input
