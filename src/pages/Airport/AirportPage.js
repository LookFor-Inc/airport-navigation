import React from 'react'
import NavigationProvider from '@/pages/Airport/components/BottomNavigation/NavigationProvider'
import NavigationView from '@/pages/Airport/NavigationView'
import withSchemePage from '@/pages/Airport/withSchemePage'

/**
 * Страница схемы
 * @returns {JSX.Element} Элемент страницы схемы
 */
function AirportPage() {
  return (
    <>
      <NavigationProvider>
        <NavigationView />
      </NavigationProvider>
    </>
  )
}

export default withSchemePage(AirportPage)
