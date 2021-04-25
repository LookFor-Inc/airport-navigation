import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {completed, waiting} from '@/data/checkpointsStatus'
import {flightInfo} from '@/data/flightInfo'
import {allTimeLineRules} from '@/data/timelineRules'
import TimelineContent from '@/pages/Airport/components/Timeline/TimelineContent'
import TimelinePoint from '@/pages/Airport/components/Timeline/TimelinePoint'
import TimelinePointIcon from '@/pages/Airport/components/Timeline/TimilinePointIcon'

/**
 * Компоненет, отображающий последовательность действий для успещной посадки пользователя
 * @returns {JSX.Element} Компонент с последовательностью основных действий
 */
function Timeline() {
  const {schemeId} = useParams()
  const [late, setLate] = useState(false)
  const [timeLineRules, setTimeLineRules] = useState([])
  const flight = flightInfo.find(f => f.id === schemeId)
  useEffect(() => {
    if (flight) {
      setLate(flight.late)
    }
    const timeLineRules = allTimeLineRules[schemeId]
    setTimeLineRules(timeLineRules ? timeLineRules : [])
  }, [flight])

  return (
    <div className='container px-6 pt-5 mx-auto'>
      <p className='uppercase text-gray-500 font-semibold text-xs'>
        Порядок действий
      </p>
      <div className='flex flex-col'>
        {timeLineRules.map(({subIcon, stepName, time, peopleStatus, willSpendTime, activeCheckpoint}, id) => {
          const type = activeCheckpoint.status === completed
            ? 'checked'
            : (activeCheckpoint.status === waiting
              ? 'disable'
              : (late ? 'error' : 'active')
            )
          return (
            <div className='flex' key={id}>
              <TimelinePointIcon
                Icon={subIcon}
              />
              <TimelinePoint
                id={id + 1}
                type={type}
                length={timeLineRules.length}
              />
              <TimelineContent
                stepName={stepName}
                time={time}
                peopleStatus={peopleStatus}
                minToSpend={willSpendTime}
                activeCheckpoint={activeCheckpoint}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Timeline
