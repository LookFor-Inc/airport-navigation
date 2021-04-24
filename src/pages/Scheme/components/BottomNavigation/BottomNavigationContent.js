import React from 'react'
import classNames from 'classnames'
import ChatIcon from '@/assets/icons/ChatIcon'
import InfoIcon from '@/assets/icons/InfoIcon'
import SchemeIcon from '@/assets/icons/SchemeIcon'
import {chatTab, infoTab, schemeTab} from '@/data/schemeSidebarTabs'
import {useNavigation} from '@/pages/Scheme/components/BottomNavigation/NavigationProvider'

/**
 * Содержимое нижней навигационной панели
 * @returns {JSX.Element} Элементы навигационной панели
 */
function BottomNavigationContent() {
  const {tab, setTab} = useNavigation()

  return (
    <div className='flex justify-between'>
      <button
        className={classNames('flex flex-col justify-center text-gray-600 items-center w-full space-y-2', {
          'text-primary': tab === infoTab
        })}
        onClick={() => setTab(infoTab)}
      >
        <InfoIcon className='h-5' />
        <span className='text-xs'>
          Инфо
        </span>
      </button>
      <button
        className={classNames('flex flex-col justify-center text-gray-600 items-center w-full space-y-2', {
          'text-primary': tab === schemeTab
        })}
        onClick={() => setTab(schemeTab)}
      >
        <SchemeIcon className='h-7' />
        <span className='text-xs'>
          Схема
        </span>
      </button>
      <button
        className={classNames('flex flex-col justify-center text-gray-600 items-center w-full space-y-2', {
          'text-primary': tab === chatTab
        })}
        onClick={() => setTab(chatTab)}
      >
        <ChatIcon className='h-7' />
        <span className='text-xs'>
          Онлайн-чат
        </span>
      </button>
    </div>
  )
}

BottomNavigationContent.propTypes = {}

export default BottomNavigationContent
