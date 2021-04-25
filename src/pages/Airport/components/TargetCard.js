import React, {createElement, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AudienceIcon from '@/assets/icons/RoomType/AudienceIcon'
import DiningIcon from '@/assets/icons/RoomType/DiningIcon'
import GymIcon from '@/assets/icons/RoomType/GymIcon'
import WCIcon from '@/assets/icons/RoomType/WCIcon'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'
import {getPathLength} from '@/handlers/api/pathHandler'
import {getRoomByTarget} from '@/handlers/api/schemeHandler'
import {useCheckpoints} from '@/pages/Airport/components/BottomNavigation/CheckpointsProvider'
import {selectSchemeRooms} from '@/pages/Airport/selectors'
import {setSearchFrom, setSearchTo, setTargetForm} from '@/store/Scheme/actions'

const iconRoomType = {
  aud: AudienceIcon,
  wc: WCIcon,
  din: DiningIcon,
  gym: GymIcon
}

const METER_PIXEL = 11.3248
const METER_MINUTES_SPEED = 51.3333

/**
 * Карточка выбора аудитории схемы
 * @param {string} target Ключевое название помещения
 * @param {function} setTarget Функция установки идентификатора помещения
 * @param {function} setSearchFrom Функция установки 'Откуда'
 * @param {function} setSearchTo Функция установки 'Куда'
 * @param {array} schemeRooms Помещения на схеме
 * @param {object} search Форма заполнения маршрута
 * @returns {JSX.Element} Элемент карточки выбора куда строить маршрут
 */
function TargetCard({target, setTarget, setSearchTo, setSearchFrom, schemeRooms, search, wayfindingPath}) {
  const {checkpoint} = useCheckpoints()
  const [room, setRoom] = useState({})
  const [distance, setDistance] = useState(null)

  useEffect(() => {
    setRoom(getRoomByTarget(schemeRooms, target))
  }, [target])

  useEffect(() => {
    const pathLength = getPathLength(wayfindingPath)
    if (pathLength) {
      setDistance({
        time: Math.ceil(pathLength / METER_PIXEL / METER_MINUTES_SPEED),
        length: (pathLength / METER_PIXEL).toFixed(2)
      })
    }
  }, [wayfindingPath])

  return <>
    {(target && room) &&
    <div className='absolute bottom-16 max-w-md w-1/3 min-w-max mx-auto inset-x-0'>
      {checkpoint.available.includes(room.target) &&
      <Card className='flex py-3 px-6 justify-between space-x-5'>
        <div className='flex space-x-3'>
          {createElement(
            iconRoomType[room.type] ? iconRoomType[room.type] : 'div',
            {className: 'self-center text-gray-600 h-7'}
          )}
          <h1 className='self-center text-coolGray-600 font-medium'>
            {room.title}
          </h1>
        </div>
        <div className='flex space-x-5'>
          <Button
            size='sm'
            color='primary'
            onClick={() => {
              setSearchFrom(checkpoint.target, checkpoint.title)
              setSearchTo(room.target, room.title)
              setTarget(null)
            }}
          >
            Сюда
          </Button>
        </div>
      </Card>
      }
      {!checkpoint.available.includes(room.target) &&
      <Card className='py-3 px-6 space-x-5 bg-red-500 text-white text-center'>
        Вы не можете пройти сюда
      </Card>
      }
    </div>
    }
    {(distance && !target && !room) &&
    <div className='absolute bottom-16 max-w-md w-1/3 min-w-max mx-auto inset-x-0'>
      <Card className='py-3 px-6 space-x-5'>
        <p>
          Вам потребуется времени: <b>~{distance.time} мин.</b><br/>
          Расстояние: <b>{distance.length} м.</b>
        </p>
      </Card>
    </div>
    }
  </>
}

TargetCard.propTypes = {
  target: PropTypes.string,
  setTarget: PropTypes.func,
  setSearchTo: PropTypes.func,
  setSearchFrom: PropTypes.func,
  schemeRooms: PropTypes.array,
  search: PropTypes.object,
  wayfindingPath: PropTypes.arrayOf(PropTypes.object)
}

/**
 * Получение состояния помещений здания
 * @param {object} state Состояние
 * @returns {{schemeRooms: []}} Значения состояний
 */
const targetCardState = state => {
  return {
    schemeRooms: selectSchemeRooms(state),
    search: state.search,
    target: state.map.target,
    wayfindingPath: state.path
  }
}

/**
 * Установка поиска
 * @param {function} dispatch Запрос на установку
 * @returns {object} Функция установки
 */
const targetCardDispatch = dispatch => {
  return {
    setTarget: target => dispatch(setTargetForm(target)),
    setSearchTo: (target, value) => dispatch(setSearchTo(target, value)),
    setSearchFrom: (target, value) => dispatch(setSearchFrom(target, value))
  }
}

export default connect(targetCardState, targetCardDispatch)(TargetCard)
