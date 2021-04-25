import React, {useEffect} from 'react'
import getPath from '@lookfor-inc/wayfinding/src/data-manager/astarHandler'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectSchemeData} from '@/pages/Airport/selectors'
import {resetPath, setPath, setUserPosition} from '@/store/Scheme/actions'

/**
 * Компонент для поиска маршрута
 * @returns {JSX.Element} Компонент поиска кратчайшего маршрута
 */
function WayFinding({setPath, resetPath, search, srcScheme, setUserPosition}) {
  /**
   * Построение маршрута
   * @param {{target: string, value: string}} from Начальная точка
   * @param {{target: string, value: string}} to Конечная точка
   * @returns {void}
   */
  const count = (from, to) => {
    getPath(from.target, to.target, srcScheme)
      .then(path => {
        setPath(path)
        const [x, y] = path[0].r[0]
        const z = path[0].z
        setUserPosition(x, y, z)
      })
      .catch(({message}) => {
        console.error(message)
        resetPath()
      })
  }

  useEffect(() => {
    if (search.from.target && search.to.target) {
      count(search.from, search.to)
    }
  }, [search])

  return (
    <>
    </>
  )
}

WayFinding.propTypes = {
  setPath: PropTypes.func,
  resetPath: PropTypes.func,
  search: PropTypes.object,
  srcScheme: PropTypes.object,
  setUserPosition: PropTypes.func
}

/**
 * Получение состояния
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const wayFindingState = state => {
  return {
    search: state.search,
    srcScheme: selectSchemeData(state)
  }
}

/**
 * Методы стейта
 * @param {function} dispatch Запрос на установку
 * @returns {object} Установка
 */
const wayFindingDispatch = dispatch => {
  return {
    setPath: path => dispatch(setPath(path)),
    setUserPosition: (x, y, z) => dispatch(setUserPosition(x, y, z)),
    resetPath: () => dispatch(resetPath())
  }
}

export default connect(wayFindingState, wayFindingDispatch)(WayFinding)
