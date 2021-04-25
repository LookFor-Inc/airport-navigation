import React, {useEffect, useState} from 'react'
import classNames from 'classnames'
import * as PropTypes from 'prop-types'
import ChevronRightIcon from '@/assets/icons/Chevron/ChevronRightIcon'
import PersonIcon from '@/assets/icons/PersonIcon'
import {PEOPLE_AMOUNT_STATUS} from '@/data/timelineRules'
import TimelineButton from '@/pages/Airport/components/Timeline/TimelineButton'

/**
 * Компонент с описанием этапа timeline
 * @param {string} stepName Наименование этапа
 * @param {string} time Вермя
 * @param {string} peopleStatus Статус по количеству людей
 * @returns {JSX.Element} Компонент для отображение описание этапа timeline
 */
function TimelineContent({stepName, time, peopleStatus}) {
  const formatTime = 'До ' + time
  const statusClasses = classNames('leading-tight text-justify pl-1 text-xs sm:text-sm flex space-x-2', {
    'text-green-500': peopleStatus === PEOPLE_AMOUNT_STATUS.LESS,
    'text-yellow-500': peopleStatus === PEOPLE_AMOUNT_STATUS.NORM,
    'text-red-500': peopleStatus === PEOPLE_AMOUNT_STATUS.MANY
  })

  const [peopleNum, setPeopleNum] = useState(0)
  useEffect(() => {
    switch (peopleStatus) {
      case PEOPLE_AMOUNT_STATUS.LESS: {
        setPeopleNum(1)
        break
      }
      case PEOPLE_AMOUNT_STATUS.NORM: {
        setPeopleNum(2)
        break
      }
      case PEOPLE_AMOUNT_STATUS.MANY: {
        setPeopleNum(3)
        break
      }
    }
  }, [peopleStatus])

  return (
    <div className="col-end-10 w-full my-4">
      <div className="flex justify-between font-semibold text-sm text-gray-700 mb-1">
        <TimelineButton text={stepName} icon={ChevronRightIcon} />
        <div className="flex flex-col flex-none justify-center">
          <p className="text-overflow text-xs font-bold text-center">
            {formatTime}
          </p>
        </div>
      </div>
      <div className={statusClasses}>
        {/* <PersonIcon className='flex' />*/}
        <div className="flex">
          {[...Array(peopleNum)].map((e, i) => <PersonIcon key={i} />)}
        </div>
        <div className="flex">
          {peopleStatus}
        </div>
      </div>
    </div>
  )
}

TimelineContent.propTypes = {
  stepName: PropTypes.string,
  time: PropTypes.string,
  peopleStatus: PropTypes.string
}

export default TimelineContent
