import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SearchIcon from '@/assets/SearchIcon'
import IconButton from '@/components/IconButton'
import {getFloorNumByRoomTarget} from '@/handlers/api/schemeHandler'
import convertRoomsToAutocompleteFormat from '@/helpers/dataConverters'
import useAutocomplete from '@/hooks/useAutocomplete'
import {selectSchemeData, selectSchemeRooms} from '@/pages/Airport/selectors'
import {setFloorNum, setTargetForm} from '@/store/Scheme/actions'

/**
 * Меню схемы
 * @returns {JSX.Element} Элемент меню
 */
function SearchNavbar({srcScheme, schemeRooms, setFloorNum, setTarget}) {
  const suggestions = convertRoomsToAutocompleteFormat(schemeRooms)

  const autocompleteFind =
    useAutocomplete(
      'Поиск в аэропорт',
      suggestions,
      (title, target) => {
        setFloorNum(getFloorNumByRoomTarget(srcScheme, target))
        setTarget(target)
      }
    )

  return (
    <div className='fixed inset-x-0 w-screen md:w-96 z-30'>
      <div className='static bg-white md:rounded-br-lg py-2 md:py-5 px-5 shadow-md'>
        <div className='flex md:pt-5 space-x-2'>
          {autocompleteFind.bind}
          <IconButton
            className='hover:bg-white pr-0'
            icon={<SearchIcon className='text-gray-400 hover:text-gray-500 h-4' />}
          />
        </div>
      </div>
    </div>
  )
}

SearchNavbar.propTypes = {
  srcScheme: PropTypes.object,
  schemeRooms: PropTypes.array,
  setFloorNum: PropTypes.func,
  setTarget: PropTypes.func
}

/**
 * Получение состояния поиска комнаты
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const searchState = state => {
  return {
    srcScheme: selectSchemeData(state),
    schemeRooms: selectSchemeRooms(state)
  }
}

/**
 * Установка этажа в redux
 * @param {function} dispatch Запрос на установку
 * @returns {object} Функция установки
 */
const searchDispatch = dispatch => {
  return {
    setFloorNum: num => dispatch(setFloorNum(num)),
    setTarget: target => dispatch(setTargetForm(target))
  }
}

export default connect(searchState, searchDispatch)(SearchNavbar)
