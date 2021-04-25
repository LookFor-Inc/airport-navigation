import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
import ChevronRightIcon from '@/assets/icons/Chevron/ChevronRightIcon'
import PlaneIcon from '@/assets/icons/PlaneIcon'
import RocketIcon from '@/assets/icons/RocketIcon'
import {flightInfo} from '@/data/flightInfo'
import ExtraInfoButton from '@/pages/Airport/components/ExtraInfoButton'
import TerminalLogo from '@/pages/Airport/components/TerminalLogo'

/**
 * Шапка для страницы с информацией для пользователя
 * @param {string} time время
 * @returns {JSX.Element} Шапка для страницы с информацией
 */
function InfoPageHeader({time}) {
  const {schemeId} = useParams()
  const [timeLeft, setTimeLeft] = useState('')
  const [late, setLate] = useState(false)
  const flight = flightInfo.find(f => f.id === schemeId)
  useEffect(() => {
    if (flight) {
      setTimeLeft(flight.timeLeft)
      setLate(flight.late)
    }
  }, [flight])

  return (
    <div className="flex flex-col items-center bg-gray-100 pt-8 pb-6">
      <div className="inline-flex flex-col space-y-2 px-6 w-full">
        <TerminalLogo className="self-start mb-4" terminalName="Терминал Д" />
        <ExtraInfoButton
          Icon={PlaneIcon}
          text="Время до вылета"
          extraData={timeLeft}
          color={late ? 'error' : 'ok'}
        />
        {late &&
        <ExtraInfoButton
          Icon={RocketIcon}
          text="Fast track"
          extraData={ChevronRightIcon}
          color="pink"
        />
        }
      </div>
    </div>
  )
}

InfoPageHeader.propTypes = {
  time: PropTypes.string
}

export default InfoPageHeader
