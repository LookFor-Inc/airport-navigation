import React from 'react'
import {timelineRules} from '@/data/timelineRules'
import TimelineContent from '@/pages/Airport/components/Timeline/TimelineContent'
import TimelinePoint from '@/pages/Airport/components/Timeline/TimelinePoint'
import TimelinePointIcon from '@/pages/Airport/components/Timeline/TimilinePointIcon'

/**
 * Компоненет, отображающий последовательность действий для успещной посадки пользователя
 * @returns {JSX.Element} Компонент с последовательностью основных действий
 */
function Timeline() {
  return (
    <div className='px-6 pt-5 mx-auto'>
      <p className='uppercase text-gray-500 font-semibold text-xs'>
        Порядок действий
      </p>
      <div className='flex flex-col'>
        {timelineRules.map(({subIcon, stepName, time, peopleStatus, type}, id) => (
          <div className='flex' key={id}>
            <TimelinePointIcon Icon={subIcon} />
            <TimelinePoint type={type} id={id + 1} length={timelineRules.length} />
            <TimelineContent stepName={stepName} time={time} peopleStatus={peopleStatus} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
