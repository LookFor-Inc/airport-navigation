import React from 'react'
import PropTypes from 'prop-types'
import ChevronRightIcon from '@/assets/icons/Chevron/ChevronRightIcon'
import PlaneIcon from '@/assets/icons/PlaneIcon'
import RocketIcon from '@/assets/icons/RocketIcon'
import ExtraInfoButton from '@/pages/Airport/components/ExtraInfoButton'
import TerminalLogo from '@/pages/Airport/components/TerminalLogo'

/**
 * Шапка для страницы с информацией для пользователя
 * @param {string} time время
 * @returns {JSX.Element} Шапка для страницы с информацией
 */
function InfoPageHeader({time}) {
  return (
    <div className='flex flex-col items-center bg-gray-100'>
      <div className='inline-flex flex-col'>
        <TerminalLogo className='self-start' terminalName='Терминал Д'/>
        <ExtraInfoButton
          Icon={PlaneIcon}
          text='Время до вылета'
          extraData='1 час 2 минуты'
          color='error'
        />
        <ExtraInfoButton
          Icon={RocketIcon}
          text='Fast track'
          extraData={ChevronRightIcon}
          color='pink'
        />
      </div>
    </div>
  )
}

InfoPageHeader.propTypes = {
  time: PropTypes.string
}

export default InfoPageHeader
