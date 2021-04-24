import React from 'react'
import Controllers from '@/pages/Airport/components/Controllers'
import FloorNumController from '@/pages/Airport/components/FloorNumController'
import Map from '@/pages/Airport/components/Map/Map'
import TargetCard from '@/pages/Airport/components/TargetCard'
import ZoomController from '@/pages/Airport/components/ZoomController'

/**
 * Вкладка схемы
 * @returns {JSX.Element} Элемент страницы
 */
function SchemeTabPage() {
  return (
    <>
      <Controllers>
        <FloorNumController />
        <ZoomController />
      </Controllers>
      <Map />
      <TargetCard />
    </>
  )
}

export default SchemeTabPage
