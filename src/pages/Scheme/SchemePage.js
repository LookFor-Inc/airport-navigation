import React from 'react'
import BottomNavigation from '@/pages/Scheme/components/BottomNavigation/BottomNavigation'
import BottomNavigationContent from '@/pages/Scheme/components/BottomNavigation/BottomNavigationContent'
import NavigationProvider from '@/pages/Scheme/components/BottomNavigation/NavigationProvider'
import Controllers from '@/pages/Scheme/components/Controllers'
import FloorNumController from '@/pages/Scheme/components/FloorNumController'
import Map from '@/pages/Scheme/components/Map/Map'
import TargetCard from '@/pages/Scheme/components/TargetCard'
import ZoomController from '@/pages/Scheme/components/ZoomController'
import withSchemePage from '@/pages/Scheme/withSchemePage'

/**
 * Страница схемы
 * @returns {JSX.Element} Элемент страницы схемы
 */
function SchemePage() {
  return (
    <>
      <NavigationProvider>
        <Controllers>
          <FloorNumController />
          <ZoomController />
        </Controllers>
        <BottomNavigation>
          <BottomNavigationContent />
        </BottomNavigation>
        <Map />
        <TargetCard />
      </NavigationProvider>
    </>
  )
}

export default withSchemePage(SchemePage)
