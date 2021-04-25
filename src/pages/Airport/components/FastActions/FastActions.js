import React from 'react'
import {fastActions} from '@/data/fastActions'
import FastActionButton from '@/pages/Airport/components/FastActions/FastActionButton'

/**
 * Элемент 'Быстрые действия'
 * @returns {JSX.Element} Элемент 'Быстрые действия'
 */
function FastActions() {
  return (
    <div className='pt-5'>
      <div className='px-6'>
        <p className='uppercase text-gray-500 font-semibold text-xs'>
          Быстрые действия
        </p>
      </div>
      <div className='overflow-x-auto mx-auto px-6 pt-3'>
        <div className='flex space-x-4 sm:justify-between'>
          {fastActions.map(({icon, name, type}, id) => (
            <FastActionButton Icon={icon} name={name} type={type} key={id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FastActions
