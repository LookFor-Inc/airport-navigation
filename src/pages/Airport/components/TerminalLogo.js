import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import svo from '@/assets/images/logotip-sheremetevo.png'

/**
 * Компонент логотипа с избражением
 * @returns {JSX.Element} Логотип
 */
function TerminalLogo({terminalName, ...props}) {
  const classes = classNames('flex space-x-4 items-center', props.className)

  return (
    <div className={classes}>
      <img className='w-9 h-9' src={svo} alt='терминал'/>
      <h3 className='font-bold text-2xl tracking-tight'>
        {terminalName}
      </h3>
    </div>
  )
}

TerminalLogo.propTypes = {
  terminalName: PropTypes.string,
  className: PropTypes.string
}
export default TerminalLogo
