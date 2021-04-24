import React from 'react'
import Controllers from '@/pages/Scheme/components/Controllers'
import FloorNumController from '@/pages/Scheme/components/FloorNumController'
import Map from '@/pages/Scheme/components/Map/Map'
import TargetCard from '@/pages/Scheme/components/TargetCard'
import ZoomController from '@/pages/Scheme/components/ZoomController'

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
