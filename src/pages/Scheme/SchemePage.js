import React from 'react'
import NavigationProvider from '@/pages/Scheme/components/BottomNavigation/NavigationProvider'
import NavigationView from '@/pages/Scheme/NavigationView'
import withSchemePage from '@/pages/Scheme/withSchemePage'

/**
 * Страница схемы
 * @returns {JSX.Element} Элемент страницы схемы
 */
function SchemePage() {
  return (
    <>
      <NavigationProvider>
        <NavigationView />
      </NavigationProvider>
    </>
  )
}

export default withSchemePage(SchemePage)
