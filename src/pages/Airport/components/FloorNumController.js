import React, {useEffect, createRef, useState, useMemo, useCallback, memo} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ChevronDownIcon from '@/assets/icons/Chevron/ChevronDownIcon'
import ChevronUpIcon from '@/assets/icons/Chevron/ChevronUpIcon'
import {getLastArrayItem} from '@/helpers/common'
import {selectSchemeFloorsInfo} from '@/pages/Airport/selectors'
import {setFloorFullData, showProgress} from '@/store/Scheme/actions'

/**
 * Контроллер для переключения этажей схемы
 * @param {any} floors Данные об этажах
 * @param {string} persistedUrl Ссылка на последний открытый этаж
 * @param {function} setFloor Установка этажа и svg
 * @param {function} showProgress Показать анимацию загрузки
 * @returns {JSX.Element} Элемент контроллера этажей
 */
function FloorNumController({floors, setFloor, showProgress, persistedFloor}) {
  const [activeFloor, setActiveFloor] = useState(0)

  const floorRefs = useMemo(() => {
    return floors.reduce((acc, {}, id) => {
      acc[id] = createRef()
      return acc
    }, {})
  }, [floors])

  useEffect(() => {
    const floorByUrlId = floors.findIndex(floor => floor.url === persistedFloor.url)
    if (floorByUrlId !== -1) {
      setActiveFloor(floorByUrlId)
      setFloor(floorByUrlId, floors[floorByUrlId].floorNum, floors[floorByUrlId].url)
    } else {
      const floorEl = getLastArrayItem(floors)
      setActiveFloor(floors.length - 1)
      setFloor(floors.length - 1, floorEl.floorNum, floorEl.url)
    }
  }, [floors])

  useEffect(() => {
    const floorByUrlId = floors.findIndex(floor => floor.floorNum === persistedFloor.num)
    if (floorByUrlId !== -1) {
      setActiveFloor(floorByUrlId)
      setFloor(floorByUrlId, floors[floorByUrlId].floorNum, floors[floorByUrlId].url)
    }
  }, [persistedFloor.num])

  /**
   * Фокус на кнопку этажа
   * @param {number} id Индекс этажа в массиве
   * @returns {void}
   */
  const scrollTo = useCallback(id => {
    floorRefs[id]
      .current
      .scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
  }, [floors])

  /**
   * Обработка перехода по этажам
   * @param {number} id Индекс этажа в массиве
   * @returns {void}
   */
  const onFloorChange = id => {
    if (activeFloor !== id) {
      showProgress()
      setActiveFloor(id)
      setFloor(id, floors[id].floorNum, floors[id].url)
    }
  }

  return (
    <div className={
      classNames('absolute md:static mb-16 md:mb-0 md:mt-0 right-2 inset-y-0 pointer-events-auto max-h-65 mt-16' +
        '')
    }>
      <div className='rounded-lg shadow sm:hover:shadow-lg h-auto'>
        <div className='flex flex-col w-10 text-gray-500 md:max-h-full'>
          <button
            className='flex justify-center py-3 bg-white rounded-t-lg duration-100 hover:text-black'
            onClick={() => {
              if (activeFloor <= 0) return
              const next = activeFloor - 1
              scrollTo(next)
              onFloorChange(next)
            }}
          >
            <ChevronUpIcon className='h-4' />
          </button>
          <div className='overflow-y-auto no-scrollbar flex flex-col bg-white'
          >
            {floors.map(({floorNum, url}, id) =>
              <button
                key={floorNum}
                ref={floorRefs[id]}
                className={
                  classNames('flex-shrink-0 py-2 duration-100 bg-white text-sm hover:text-black', {
                    'bg-primary text-white hover:text-white': id === activeFloor
                  })
                }
                onClick={() => onFloorChange(id)}
              >
                {floorNum}
              </button>
            )}
          </div>
          <button
            className='flex justify-center py-3 bg-white rounded-b-lg duration-100 hover:text-black'
            onClick={() => {
              if (activeFloor >= floors.length - 1) return
              const next = activeFloor + 1
              scrollTo(next)
              onFloorChange(next)
            }}
          >
            <ChevronDownIcon className='h-4' />
          </button>
        </div>
      </div>
    </div>
  )
}

FloorNumController.propTypes = {
  floors: PropTypes.array,
  setFloor: PropTypes.func,
  showProgress: PropTypes.func,
  persistedFloor: PropTypes.object
}

/**
 * Получение состояния номера этажа
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const floorNumControllerState = state => {
  return {
    floors: selectSchemeFloorsInfo(state),
    persistedFloor: state.floor
  }
}

/**
 * Установка этажа в redux
 * @param {function} dispatch Запрос на установку
 * @returns {object} Функция установки
 */
const floorNumControllerDispatch = dispatch => {
  return {
    setFloor: (id, num, url) => dispatch(setFloorFullData(id, num, url)),
    showProgress: () => dispatch(showProgress())
  }
}

export default memo(connect(floorNumControllerState, floorNumControllerDispatch)(FloorNumController))
