import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getPathOnFloor} from '@/handlers/api/pathHandler'
import {getLine, interpolateStr, selectEl} from '@/helpers/d3'
import './PathLine.css'

const DELTA = 250

/**
 * Компонент построения пути
 * @param {string[]} sizes Размеры svg-схемы
 * @param {[{z: number, r: [[number]]}]} wayfindingPath Полный путь
 * @param {number} floorNum Номер этажа
 * @returns {JSX.Element} Путь
 */
function PathLine({sizes, wayfindingPath, floorNum}) {
  const [floorChecked, setFloorChecked] = useState([])
  const svgPath = selectEl('.map_path-line')
  const line = getLine()

  useEffect(() => {
    svgPath.call(transition)
    setFloorChecked([[], floorNum])
  }, [wayfindingPath])

  useEffect(() => {
    if (!floorChecked.includes(floorNum)) {
      svgPath.call(transition)
      setFloorChecked([...floorChecked, floorNum])
    }
  }, [floorNum])

  /**
   * Анимация отрисовки линии
   * @param {object} path Объект пути
   * @returns {void}
   */
  const transition = path => {
    path
      .transition()
      .duration(1300)
      .attrTween('stroke-dasharray', tweenDash)
    path.transition().delay(1300).duration(0.01).attr('stroke-dasharray', '0')
  }

  /**
   * Отображение анимации пути
   * @returns {function(*=): *} Интерполяция строк
   */
  function tweenDash() {
    // eslint-disable-next-line no-invalid-this
    const fun = interpolateStr(this.getTotalLength())
    return el => fun(el)
  }

  const k1 = parseInt(sizes[0]) / DELTA
  const k2 = parseInt(sizes[1]) / DELTA
  return (
    <>
      {getPathOnFloor(wayfindingPath, floorNum)
        .map((pathLine, i) =>
          <path
            key={i}
            className='map_path-line'
            style={{strokeWidth: `${Math.max(k1, k2)}px`}}
            d={line(pathLine)}
          />
        )}
    </>
  )
}

PathLine.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  wayfindingPath: PropTypes.arrayOf(PropTypes.object),
  floorNum: PropTypes.number
}

/**
 * Получение состояния пути и текущего этажа
 * @param {object} state Состояние
 * @returns {{fullPath, floor: (number|*)}} Значения состояний
 */
const pathState = state => {
  return {
    wayfindingPath: state.path,
    floorNum: state.floor.num
  }
}

export default connect(pathState)(PathLine)
