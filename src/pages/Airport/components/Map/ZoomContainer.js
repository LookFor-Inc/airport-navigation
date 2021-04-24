import React, {useEffect, useState} from 'react'
import * as d3 from 'd3'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectEl} from '@/helpers/d3'
import {saveTransform} from '@/store/Scheme/actions'
import {useMap} from './MapProvider'

const delta = 0.5
const scaleExtent = [0.5, 20]

/**
 * Контейнер масштабирования карты
 * @param {React.ReactNode} children Дочерние компоненты
 * @param {object} transform Состояние контейнера карты
 * @param {function} saveTransform Сохранить состояние контейнера карты
 * @returns {JSX.Element} Контейнер масштабирования карты
 */
function ZoomContainer({children, transform, saveTransform}) {
  const svgElement = useMap()
  const [{x, y, k}, setTransform] = useState(transform)

  useEffect(() => {
    if (!svgElement) return
    const selection = selectEl(svgElement)

    // Применение scale из стейта при первой загрузке
    selection.call(d3.zoom().transform, d3.zoomIdentity
      .translate(transform.x, transform.y)
      .scale(transform.k)
    )

    selection
      .on('mousedown touchstart', function(event) {
        // event.preventDefault()
        // eslint-disable-next-line no-invalid-this
        this.style.cursor = 'grabbing'
      })
      .style('cursor', 'default')

    selectEl('#btnZoomIn').on('click', () => {
      zoom.scaleBy(selection.transition().duration(200), 1 + delta)
    })

    selectEl('#btnZoomOut').on('click', () => {
      zoom.scaleBy(selection.transition().duration(200), 1 - delta)
    })

    const zoom = d3.zoom()
    zoom
      .scaleExtent(scaleExtent)
      .on('zoom', function(event) {
        // eslint-disable-next-line no-invalid-this
        this.style.cursor = 'grabbing'
        setTransform(event.transform)
      })
      .on('end', function(event) {
        // eslint-disable-next-line no-invalid-this
        this.style.cursor = 'default'
        saveTransform(event.transform)
      })

    selection.call(zoom)
    return () => selection.on('.zoom', null)
  }, [svgElement])

  return <g transform={`translate(${x}, ${y}) scale(${k})`}>{children}</g>
}

ZoomContainer.propTypes = {
  children: PropTypes.node,
  transform: PropTypes.object,
  saveTransform: PropTypes.func
}

/**
 * Получение состояния карты
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const mapState = state => {
  return {
    transform: state.map.transform
  }
}

/**
 * Установка исходных данных в состояние карты
 * @param {function} dispatch Запрос на установку
 * @returns {object} Функция установки
 */
const mapDispatch = dispatch => {
  return {
    saveTransform: transform => dispatch(saveTransform(transform))
  }
}

export default connect(mapState, mapDispatch)(ZoomContainer)
