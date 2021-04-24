import React, {createElement} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

function ExtraInfoButton({Icon, text, extraData, color, ...props}) {
  console.log(typeof extraData)
  const classes = classNames('flex justify-between btn select-none', {
    'btn-error': color === 'error',
    'bg-pink-500 hover:bg-pink-700': color === 'pink',
    'space-x-4': typeof extraData === 'string'
  }, props.className)

  return (
    <button className={classes}>
      <div className='flex space-x-4'>
        <Icon className='text-white'/>
        <span className='text-sm text-white text-center'>{text}</span>
        {typeof extraData === 'string' && <span className='text-sm'>{extraData}</span>}
      </div>
      {typeof extraData === 'function' && createElement(extraData, {className: 'text-white'})}
    </button>
  )
}

ExtraInfoButton.propTypes = {
  Icon: PropTypes.node,
  text: PropTypes.string,
  extraData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  color: PropTypes.string,
  className: PropTypes.string
}

export default ExtraInfoButton
