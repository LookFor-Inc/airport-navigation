import React from 'react'
import MinusIcon from '@/assets/icons/MinusIcon'
import PlusIcon from '@/assets/icons/PlusIcon'

/**
 * Контроллер для управления приближением карты
 * @returns {JSX.Element} Элемент контроллера приближения
 */
function ZoomController() {
  return (
    <div className='absolute md:static left-2 top-1/3 pointer-events-auto'>
      <div className='flex flex-col w-10 rounded-lg shadow sm:hover:shadow-lg text-gray-500'>
        <button
          id='btnZoomIn'
          className='flex justify-center py-3 bg-white rounded-t-lg duration-100 hover:text-black'
        >
          <PlusIcon className='h-4' />
        </button>
        <button
          id='btnZoomOut'
          className='flex justify-center py-3 bg-white rounded-b-lg duration-100 hover:text-black'
        >
          <MinusIcon className='h-4' />
        </button>
      </div>
    </div>
  )
}

ZoomController.propTypes = {}

export default ZoomController
