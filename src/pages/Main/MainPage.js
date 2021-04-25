import React, {useState} from 'react'
import BarCodeIcon from '@/assets/icons/BarCodeIcon'
import PlaneArrivalIcon from '@/assets/icons/PlaneArrivalIcon'
import PlaneDepartureIcon from '@/assets/icons/PlaneDepartureIcon'
import ReversIcon from '@/assets/icons/ReversIcon'
import SvoIcon from '@/assets/icons/SvoIcon'
import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import Input from '@/components/Input'
import Content from '@/components/Page/Content'
import PlaneButton from '@/components/PlaneButton'
import {arrival, departure} from '@/data/flightModes'
import {filterFlights} from '@/handlers/api/flightHandler'
import {getDateValueInput} from '@/helpers/dateUtil'
import FlightCard from '@/pages/Main/components/FlightCard'

/**
 * Главная страница
 * @returns {JSX.Element} Элемент главной страницы
 */
function MainPage() {
  const [flights, setFlights] = useState(null)
  const [flightMode, setFlightMode] = useState(departure)
  const [from, setFrom] = useState('Москва')
  const [to, setTo] = useState('Лондон')
  const [fromDate, setFromDate] = useState(getDateValueInput())
  const [toDate, setToDate] = useState(getDateValueInput(1))

  /**
   * Поменять города местами
   * @returns {void}
   */
  const reversForm = () => {
    const temp = from
    setFrom(to)
    setTo(temp)
  }

  /**
   * Обработчик формы
   * @param {Event} e Событие
   * @returns {void}
   */
  const onSubmit = e => {
    e.preventDefault()
    setFlights(filterFlights(flightMode, from, to, fromDate, toDate))
  }

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Content className='flex flex-col justify-center items-center space-y-5'>
        <SvoIcon className='w-full max-w-md h-20' />
        <h1 className='font-bold text-2xl text-center'>
          Персональный ассистен
        </h1>
        <p className='text-gray-800 mb-24 text-center text-sm'>
          Помощь по навигации и учёту времени в аэропорту.
          Для продолжения найдите свой рейс.
        </p>
        <div className='p-0.5 rounded-lg flex bg-gray-200 hover:bg-gray-300 transition-colors'>
          <div className='flex space-x-0.5'>
            <PlaneButton
              icon={PlaneDepartureIcon}
              active={flightMode === departure}
              onClick={() => setFlightMode(departure)}
            >Вылет</PlaneButton>
            <PlaneButton
              icon={PlaneArrivalIcon}
              active={flightMode === arrival}
              onClick={() => setFlightMode(arrival)}
            >Прилёт</PlaneButton>
          </div>
        </div>
        <form onSubmit={e => onSubmit(e)}>
          <div className='flex'>
            <Input
              placeholder='Откуда'
              onChange={e => setFrom(e.target.value)}
              value={from}
            />
            <IconButton
              className='mx-1.5'
              icon={<ReversIcon className='h-full transition-colors hover:text-primaryDark' />}
              onClick={() => reversForm()}
            />
            <Input
              placeholder='Куда'
              onChange={e => setTo(e.target.value)}
              value={to}
            />
          </div>
          <div className='flex flex-wrap mt-3'>
            <div className='w-full sm:w-auto sm:flex flex-wrap'>
              <Input
                type='date'
                className='sm:flex-1'
                onChange={e => setFromDate(e.target.value)}
                value={fromDate}
              />
              <Input
                type='date'
                className='mt-3 sm:mt-0 sm:flex-1 sm:ml-1'
                onChange={e => setToDate(e.target.value)}
                value={toDate}
              />
            </div>
            <Button
              type='submit'
              color='primary'
              className='w-full my-3 sm:my-0 sm:w-auto sm:ml-1'
            >Найти</Button>
          </div>
        </form>
        {flights !== null && <>
          <hr className='w-full' />
          {flights.length !== 0 && (
            <>
              <h2 className='font-medium text-lg'>
                Список найденных рейсов
              </h2>
              {flights.map(flight => (
                <FlightCard
                  key={flight.number}
                  {...flight}
                />
              ))}
            </>
          )}
          {!flights.length && (
            <h2 className='font-medium text-lg'>
              Ничего не найдено
            </h2>
          )}
        </>
        }
        <hr className='w-full' />
        <div className='flex space-x-6'>
          <BarCodeIcon className='w-28 text-gray-800' />
          <div className='my-5'>
            <h2 className='font-medium text-xl mb-2'>Или отсканируйте штрих-код на билете</h2>
            <p className='text-gray-800 text-sm'>Для этого потребуется доступ к камере</p>
            <p className='text-gray-800 mb-5 text-sm'>вашего устройства</p>
            <Button color='primary' className='w-auto'>
              Отсканировать
            </Button>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default MainPage
