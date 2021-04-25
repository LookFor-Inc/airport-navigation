import React from 'react'
import {completed, waiting} from '@/data/checkpointsStatus'
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
    <div className="container px-8 mx-auto">
      <div className="flex flex-col">
        {timelineRules.map(({subIcon, stepName, time, rules, activeCheckpoint, status}, id) => {
          // ToDo: сделать проверку на время
          const type = activeCheckpoint.status === completed
            ? 'checked'
            : ( activeCheckpoint.status === waiting
              ? 'disable'
              : ( time ? 'active' : 'error')
            )
          return (
            <div className="flex" key={id}>
              <TimelinePointIcon Icon={subIcon}/>
              <TimelinePoint type={type} id={id + 1} length={timelineRules.length}/>
              <TimelineContent stepName={stepName} time={time} rules={rules} activeCheckpoint={activeCheckpoint}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Timeline
