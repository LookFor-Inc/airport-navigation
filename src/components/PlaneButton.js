import React, {createElement} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Общий компонент кнопки с самолётом
 * @param {function} icon Элемент иконка
 * @param {boolean} active Активный статус
 * @param {element} children Дочерние элементы
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Кнопка
 */
function PlaneButton({icon, active, children, ...props}) {
  const classes = classNames('btn flex space-x-3 transition-colors', props.className, {
    'bg-primary text-white hover:shadow-sm': active
  })

  return (
    <button
      {...props}
      type='button'
      className={classes}
    >
      {createElement(icon, {className: 'h-4'})}
      <div>{children}</div>
    </button>
  )
}

PlaneButton.propTypes = {
  icon: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}

export default PlaneButton
