import React from 'react'
import {chatTab, infoTab, schemeTab} from '@/data/schemeSidebarTabs'
import BottomNavigation from '@/pages/Scheme/components/BottomNavigation/BottomNavigation'
import BottomNavigationContent from '@/pages/Scheme/components/BottomNavigation/BottomNavigationContent'
import {useNavigation} from '@/pages/Scheme/components/BottomNavigation/NavigationProvider'
import ChatTabPage from '@/pages/Scheme/components/tabs/ChatTabPage'
import InfoTabPage from '@/pages/Scheme/components/tabs/InfoTabPage'
import SchemeTabPage from '@/pages/Scheme/components/tabs/SchemeTabPage'

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
