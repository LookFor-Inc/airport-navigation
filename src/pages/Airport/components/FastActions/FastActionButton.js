import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {schemeTab} from '@/data/schemeSidebarTabs'
import {useCheckpoints} from '@/pages/Airport/components/BottomNavigation/CheckpointsProvider'
import {useNavigation} from '@/pages/Airport/components/BottomNavigation/NavigationProvider'
import {setSearchFrom, setSearchTo} from '@/store/Scheme/actions'

/**
 * Кнопки для быстрых действий
 * @param {function} Icon Икнока для кнопки
 * @param {string} name Название иконки
 * @param {string} type Тип аудитории
 * @param {function} setSearchFrom Функция установки 'Откуда'
 * @param {function} setSearchTo Функция установки 'Куда'
 * @returns {JSX.Element} Компонент кнопки для быстрых действий
 */
function FastActionsButton({Icon, name, type, setSearchTo, setSearchFrom}) {
  const {setTab} = useNavigation()
  const checkpoint = useCheckpoints().checkpoint
  const available = checkpoint.available

  return (
    <button
      className='self-start'
      onClick={() => {
        const availableRoomsByType = available.filter(roomType => roomType.indexOf(type) !== -1)
        if (availableRoomsByType.length !== 0) {
          const roomType = availableRoomsByType[0]
          setSearchFrom(checkpoint.target, checkpoint.title)
          setSearchTo(roomType, '')
          setTab(schemeTab)
        }
      }}
    >
      <div className='flex flex-col items-center'>
        <div className='min-width bg-gray-900 h-16 w-16 text-white text-center font-extrabold flex items-center
        justify-center rounded-full'>
          <Icon/>
        </div>
        <div className='flex flex-col items-center justify-center pt-2.5'>
          <span className='text-center text-gray-900 font-semibold text-xs'>
            {name}
          </span>
        </div>
      </div>
    </button>
  )
}

FastActionsButton.propTypes = {
  Icon: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  setSearchTo: PropTypes.func,
  setSearchFrom: PropTypes.func
}

/**
 * Установка поиска
 * @param {function} dispatch Запрос на установку
 * @returns {object} Функция установки
 */
const targetCardDispatch = dispatch => {
  return {
    setSearchTo: (target, value) => dispatch(setSearchTo(target, value)),
    setSearchFrom: (target, value) => dispatch(setSearchFrom(target, value))
  }
}

export default connect(null, targetCardDispatch)(FastActionsButton)
