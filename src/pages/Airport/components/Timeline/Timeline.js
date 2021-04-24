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
    <div className="container">
      <div className="flex flex-col">
        {timelineRules.map(({subIcon, stepName, time, rules}, id) => (
          <div className="flex" key={id}>
            <TimelinePointIcon Icon={subIcon}/>
            <TimelinePoint type='checked' id={id + 1} length={timelineRules.length}/>
            <TimelineContent stepName={stepName} time={time} rules={rules}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
