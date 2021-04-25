import React from 'react'
import FastActions from '@/pages/Airport/components/FastActions/FastActions'
import Timeline from '@/pages/Airport/components/Timeline/Timeline'

/**
 * Body
 * @returns {JSX.Element} Body
 */
function InfoTabBody() {
  return (
    <div className='shadow-inner'>
      <FastActions />
      <Timeline />
    </div>
  )
}

export default InfoTabBody
