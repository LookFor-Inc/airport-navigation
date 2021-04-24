import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

function ExtraInfoButton({Icon, text, extraText, color, ...props}) {
  const classes = classNames('flex space-x-4 btn select-none', {
    'btn-error': color === 'error'
  }, props.className)

  return (
    <button className={classes}>
      <Icon/>
      <span>{text}</span>
      <span>{extraText}</span>
    </button>
  )
}

ExtraInfoButton.propTypes = {
  Icon: PropTypes.node,
  text: PropTypes.string,
  extraText: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
}

export default ExtraInfoButton
