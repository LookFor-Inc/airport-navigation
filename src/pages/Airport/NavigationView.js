import React from 'react'
import {chatTab, infoTab, schemeTab} from '@/data/schemeSidebarTabs'
import BottomNavigation from '@/pages/Airport/components/BottomNavigation/BottomNavigation'
import BottomNavigationContent from '@/pages/Airport/components/BottomNavigation/BottomNavigationContent'
import {useNavigation} from '@/pages/Airport/components/BottomNavigation/NavigationProvider'
import ChatTabPage from '@/pages/Airport/components/tabs/ChatTabPage'
import InfoTabPage from '@/pages/Airport/components/tabs/InfoTabPage'
import SchemeTabPage from '@/pages/Airport/components/tabs/SchemeTabPage'

/**
 * Страница схемы
 * @returns {JSX.Element} Элемент страницы схемы
 */
function NavigationView() {
  const {tab} = useNavigation()

  return (
    <>
      {tab === infoTab && <InfoTabPage />}
      {tab === schemeTab && <SchemeTabPage />}
      {tab === chatTab && <ChatTabPage />}
      <BottomNavigation>
        <BottomNavigationContent />
      </BottomNavigation>
    </>
  )
}

export default NavigationView
