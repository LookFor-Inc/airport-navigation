import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

/**
 * Общий компонент формы группы
 * @param {element} children Дочерние элементы
 * @param {boolean} margin Отступы
 * @param {string} className Дополнительные стили
 * @returns {JSX.Element} Форма группы
 */
function FormGroup({children, margin = true, className}) {
  const classes = classNames('w-full', className, {
    'mt-6': margin
  })

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.bool,
  className: PropTypes.string
}

export default FormGroup
