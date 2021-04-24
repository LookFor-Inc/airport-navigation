import React from 'react'
import PropTypes from 'prop-types'
import ChevronRightIcon from '@/assets/icons/Chevron/ChevronRightIcon'
import PlaneIcon from '@/assets/icons/PlaneIcon'
import RocketIcon from '@/assets/icons/RocketIcon'
import Content from '@/components/Page/Content'
import ExtraInfoButton from '@/pages/Airport/components/ExtraInfoButton'
import TerminalLogo from '@/pages/Airport/components/TerminalLogo'

/**
 * Шапка для страницы с информацией для пользователя
 * @returns {JSX.Element} Шапка для страницы с информацией
 */
function InfoPageHeader() {
  return (
    <Content>
      <TerminalLogo className='pb-6' terminalName='Терминал Д'/>
      <div className='flex flex-col space-y-4'>
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
    </Content>
  )
}

InfoPageHeader.propTypes = {
  time: PropTypes.string
}

export default InfoPageHeader
