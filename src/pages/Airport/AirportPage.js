import React from 'react'
import CheckpointsProvider from '@/pages/Airport/components/BottomNavigation/CheckpointsProvider'
import NavigationProvider from '@/pages/Airport/components/BottomNavigation/NavigationProvider'
import WayFinding from '@/pages/Airport/components/WayFinding'
import NavigationView from '@/pages/Airport/NavigationView'
import withSchemePage from '@/pages/Airport/withSchemePage'

/**
 * Страница схемы
 * @returns {JSX.Element} Элемент страницы схемы
 */
function AirportPage() {
  return (
    <div>
      <WayFinding />
      <CheckpointsProvider>
        <NavigationProvider>
          <NavigationView />
        </NavigationProvider>
      </CheckpointsProvider>
    </div>
  )
}

export default withSchemePage(AirportPage)
