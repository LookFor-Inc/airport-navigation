import React from 'react'

/**
 * Меню схемы
 * @returns {JSX.Element} Элемент меню
 */
function Sidebar() {
  return (
    <div className='fixed inset-x-0 w-screen md:w-96 z-30'>
      <div className='static bg-white md:rounded-br-lg py-2 md:py-5 px-5 shadow-md'>
        Панель
      </div>
    </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar
