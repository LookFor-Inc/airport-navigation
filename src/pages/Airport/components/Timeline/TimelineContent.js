import React from 'react'
import * as PropTypes from 'prop-types'
import ChevronRightIcon from '@/assets/icons/Chevron/ChevronRightIcon'
import TimelineButton from '@/pages/Airport/components/Timeline/TimelineButton'

/**
 * Компонент с описанием этапа timeline
 * @param {string} stepName Наименование этапа
 * @param {string} time Вермя
 * @param {[string]} rules Список с парвилами
 * @returns {JSX.Element} Компонент для отображение описание этапа timeline
 */
function TimelineContent({stepName, time, rules}) {
  return (
    <div className="col-end-10 w-full my-4">
      <div className='flex justify-between font-semibold text-lg text-gray-700 mb-1'>
        <TimelineButton text={stepName} icon={ChevronRightIcon}/>
        <h3>до {time}</h3>
      </div>
      {rules.map((rule, id) => (
        <p className="leading-tight text-justify pl-1" key={id}>
          {rule}
        </p>
      ))}
    </div>
  )
}

TimelineContent.propTypes = {
  stepName: PropTypes.string,
  time: PropTypes.string,
  rules: PropTypes.arrayOf(PropTypes.string)
}

export default TimelineContent
