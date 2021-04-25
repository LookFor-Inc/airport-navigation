import React from 'react'
import {fastActions} from '@/data/fastActions'
import FastActionButton from '@/pages/Airport/components/FastActions/FastActionButton'

/**
 * Элемент "Быстрые действия"
 * @returns {JSX.Element} Элемент "Быстрые действия"
 */
function FastActions() {
  return (
    <div className="pt-5">
      <div className="mx-6 mb-1.5">
        <p className="uppercase text-gray-500 font-sans font-semibold font-xs">Быстрые действия</p>
      </div>
      <div className="overflow-x-auto">
        <div className="flex items-stretch items-start space-x-4 sm:justify-between">
          {fastActions.map(({icon, name}, id) => (
            <FastActionButton Icon={icon} name={name} key={id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FastActions
