import React, {useEffect} from 'react'
import getPath from '@lookfor-inc/wayfinding/src/data-manager/astarHandler'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectSchemeData} from '@/pages/Airport/selectors'
import {resetPath, setPath} from '@/store/Scheme/actions'

/**
 * Компонент для поиска маршрута
 * @returns {JSX.Element} Компонент поиска кратчайшего маршрута
 */
function WayFinding({setPath, resetPath, search, srcScheme}) {
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
  srcScheme: PropTypes.object
}

const wayFindingState = state => {
  return {
    search: state.search,
    srcScheme: selectSchemeData(state)
  }
}

const wayFindingDispatch = dispatch => {
  return {
    setPath: path => dispatch(setPath(path)),
    resetPath: () => dispatch(resetPath())
  }
}

export default connect(wayFindingState, wayFindingDispatch)(WayFinding)
