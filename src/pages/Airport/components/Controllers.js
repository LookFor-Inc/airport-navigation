import React from 'react'
import * as PropTypes from 'prop-types'

/**
 * Обёртка для контроллеров схемы
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Элемент обёртки контроллеров
 */
function Controllers({children}) {
  return (
    <div className='absolute inset-x-0 md:inset-x-auto md:right-2 md:flex flex-col h-full justify-center
    space-y-8 z-20 pointer-events-none'>
      {children}
    </div>
  )
}

Controllers.propTypes = {
  children: PropTypes.node
}

export default Controllers
