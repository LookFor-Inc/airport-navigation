import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import PlaneArrivalIcon from '@/assets/icons/PlaneArrivalIcon'
import PlaneDepartureIcon from '@/assets/icons/PlaneDepartureIcon'
import Button from '@/components/Button'
import {arrival, departure} from '@/data/flightModes'

/**
 * Получение иконки рейс
 * @param {string} type Тип рейса
 * @returns {JSX.Element} Иконка
 */
function getTypeIcon(type) {
  if (type === departure) {
    return <PlaneDepartureIcon />
  } else {
    return <PlaneArrivalIcon />
  }
}

/**
 * Карточка рейса
 * @param {string} type Тип рейса
 * @param {string} number Номер рейса
 * @param {string} from Откуда
 * @param {string} to Куда
 * @param {string} date Дата
 * @param {string} time Время
 * @param {string} url Ссылка
 * @returns {JSX.Element} Элемент карточки
 */
function FlightCard({type, number, from, to, date, time, url}) {
  return (
    <div className='bg-gray-200 rounded-lg p-5 w-full max-w-xl'>
      <div className='flex space-x-4'>
        <div className='mt-2'>
          {getTypeIcon(type)}
        </div>
        <div className='flex flex-col'>
          <div className='flex-auto mb-3'>
            <div className='flex flex-col'>
              <h1 className='flex-auto text-xl font-semibold'>
                {from} - {to}
              </h1>
              <p>Номер рейса: <b>{number}</b></p>
              <p>Время вылета: <b>{time}</b></p>
            </div>
          </div>
          <Link to={url}>
            <Button className='text-white bg-gray-700'>
              Выбрать
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

FlightCard.propTypes = {
  type: PropTypes.oneOf([departure, arrival]),
  number: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  date: PropTypes.object,
  time: PropTypes.string,
  url: PropTypes.string
}

export default FlightCard
