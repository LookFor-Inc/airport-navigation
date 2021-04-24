import React from 'react'
import NavigationProvider from '@/pages/Airport/components/BottomNavigation/NavigationProvider'
import NavigationView from '@/pages/Airport/NavigationView'
import withSchemePage from '@/pages/Airport/withSchemePage'

/**
 * Страница с информацией
 * @returns {JSX.Element} Элемент страницы схемы
 */
function AirportPage() {
  return (
    <div>
      <NavigationProvider>
        <NavigationView />
      </NavigationProvider>
    </div>
  )
}

export default withSchemePage(AirportPage)
