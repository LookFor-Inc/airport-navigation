import React from 'react'
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
    <div className='bg-gray-50 h-screen'>
      <WayFinding />
      <NavigationProvider>
        <NavigationView />
      </NavigationProvider>
    </div>
  )
}

export default withSchemePage(AirportPage)
