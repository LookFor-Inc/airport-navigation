import React, {createContext, useState, useContext} from 'react'
import PropTypes from 'prop-types'
import {infoTab} from '@/data/schemeSidebarTabs'

const NavigationContext = createContext(null)

/**
 * Provider меню схемы
 * @param {element} children Дочерние элементы
 * @returns {JSX.Element} Provider меню схемы
 */
const NavigationProvider = ({children}) => {
  const [tab, setTab] = useState(infoTab)

  return (
    <NavigationContext.Provider value={{tab, setTab}}>
      {children}
    </NavigationContext.Provider>
  )
}

NavigationProvider.propTypes = {
  children: PropTypes.node
}

/**
 * Hook для управления меню смехы
 * @returns {Context} Контекст меню схемы
 */
export function useNavigation() {
  return useContext(NavigationContext)
}

export default NavigationProvider
