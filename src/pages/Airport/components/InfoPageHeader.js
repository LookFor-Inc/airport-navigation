import React from 'react'
import PropTypes from 'prop-types'
import PlaneIcon from '@/assets/icons/PlaneIcon'
import ExtraInfoButton from '@/pages/Airport/components/ExtraInfoButton'
import TerminalLogo from '@/pages/Airport/components/TerminalLogo'

function InfoPageHeader({time}) {
  return (
    <div className='flex flex-col items-center'>
      <div className='inline-flex flex-col'>
        <TerminalLogo className='self-start' terminalName='Терминал Д'/>
        <ExtraInfoButton
          Icon={PlaneIcon}
          text='Время до вылета'
          extraText={time}
          color='error'
        />
      </div>
    </div>
  )
}

InfoPageHeader.propTypes = {
  time: PropTypes.string
}

export default InfoPageHeader
