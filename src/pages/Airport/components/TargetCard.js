import React, {createElement, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AudienceIcon from '@/assets/icons/RoomType/AudienceIcon'
import DiningIcon from '@/assets/icons/RoomType/DiningIcon'
import GymIcon from '@/assets/icons/RoomType/GymIcon'
import WCIcon from '@/assets/icons/RoomType/WCIcon'
import Button from '@/components/Button'
import Card from '@/components/Card/Card'
import {getRoomByTarget} from '@/handlers/api/schemeHandler'
import {selectSchemeRooms} from '@/pages/Airport/selectors'
import {setTargetForm} from '@/store/Scheme/actions'

const iconRoomType = {
  aud: AudienceIcon,
  wc: WCIcon,
  din: DiningIcon,
  gym: GymIcon
}

/**
 * Карточка выбора аудитории схемы
 * @param {string} target Ключевое название комнаты
 * @param {function} setTarget Функция установки идентификатора комнаты
 * @param {array} schemeRooms Комнаты на схеме
 * @param {object} search Форма заполнения маршрута
 * @returns {JSX.Element} Элемент карточки выбора аудитории
 */
function TargetCard({target, setTarget, schemeRooms, search}) {
  const [room, setRoom] = useState({})

  useEffect(() => {
    setRoom(getRoomByTarget(schemeRooms, target))
  }, [target])

  return <>
    {(target && room) &&
    <div className='absolute bottom-16 max-w-md w-1/3 min-w-max mx-auto inset-x-0'>
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
              setTarget(null)
            }}
          >
            Сюда
          </Button>
        </div>
      </Card>
    </div>
    }
  </>
}

TargetCard.propTypes = {
  target: PropTypes.string,
  setTarget: PropTypes.func,
  schemeRooms: PropTypes.array,
  search: PropTypes.object
}

/**
 * Получение состояния комнат здания
 * @param {object} state Состояние
 * @returns {{schemeRooms: []}} Значения состояний
 */
const targetCardState = state => {
  return {
    schemeRooms: selectSchemeRooms(state),
    search: state.search,
    target: state.map.target
  }
}

/**
 * Установка поиска
 * @param {function} dispatch Запрос на установку
 * @returns {object} Функция установки
 */
const targetCardDispatch = dispatch => {
  return {
    setTarget: target => dispatch(setTargetForm(target))
  }
}

export default connect(targetCardState, targetCardDispatch)(TargetCard)
