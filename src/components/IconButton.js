import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Button from '@/components/Button'

/**
 * Общий компонент кнопки с иконкой
 * @param {element} icon Иконка
 * @param {string} className Стили
 * @param {object} props Дополнительные свойства
 * @returns {JSX.Element} Кнопка с иконкой
 */
function IconButton({icon, className, ...props}) {
  const btnClasses = classNames('inline-flex p-2 border-0', className)
  return (
    <Button className={btnClasses} {...props}>
      {icon}
    </Button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string
}

export default IconButton
