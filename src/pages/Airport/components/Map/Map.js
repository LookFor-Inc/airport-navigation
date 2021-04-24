import React, {useRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import {connect} from 'react-redux'
import PageProgress from '@/components/PageProgress'
import {getViewBox, selectEl, selectEls} from '@/helpers/d3'
import {hideProgress, setTargetForm} from '@/store/Scheme/actions'
import MapProvider from './MapProvider'
import Path from './Path'
import ZoomContainer from './ZoomContainer'

const REGEX_END = new RegExp('_\\d+$')

/**
 * Компонент схемы здания
 * @param {string} schemeUrl Ссылка на схему этажа
 * @param {boolean} progress Есть/нет загрузка(-и)
 * @param {string} target Идентификатор комнаты
 * @param {function} hideProgress Функция скрытия загрузки
 * @param {function} setTarget Функция установки идентификатора комнаты
 * @returns {JSX.Element} Схема
 */
function Map({schemeUrl, progress, target, hideProgress, setTarget}) {
  const prevElem = useRef(null)
  const [mapViewBox, setMapViewBox] = useState('')

  /**
   * Обновление данных компонента
   * при обновлении svg карты
   * @returns {void}
   */
  const updateSvgData = () => {
    setMapViewBox(getViewBox())
    const svg = selectEls('svg.map')
    const rooms = selectEls('rect, circle, ellipse, path')

    svg.on('click', event => {
      const clicked = event.target.id
      if (!clicked && prevElem.current) {
        prevElem.current.transition().style('fill', null)
        prevElem.current = null
        setTarget(null)
      }
    })

    rooms
      .on('click', function(event) {
        event.preventDefault()
        // eslint-disable-next-line no-invalid-this
        let clicked = selectEl(this)
        let clickedId = clicked.attr('id')
        if (!clickedId || clickedId.charAt(0) === 's') {
          setTarget(null)
          return
        }

        if (clickedId.match(REGEX_END)) {
          clickedId = clickedId.replace(REGEX_END, '')
          clicked = selectEl('#' + clickedId)
        }

        if (prevElem.current) {
          if (clickedId === prevElem.current.attr('id')) return
          if (prevElem.current) {
            prevElem.current.transition().style('fill', null)
          }
        }

        paintSelected(clicked)
        setTarget(clickedId)
      })
  }

  /**
   * Закрачить (выделить) комнату на svg
   * @param {any} selected svg элемент
   * @returns {void}
   */
  const paintSelected = selected => {
    selected.transition().style('fill', '#0057ff')
    prevElem.current = selected
  }

  useEffect(() => {
    // Снятие выделения комнаты при выборе отсюда/сюда
    if (!target && prevElem.current) {
      prevElem.current.transition().style('fill', null)
      prevElem.current = null
    }
    if (target) {
      paintSelected(selectEl(`#${target}`))
    }
  }, [target])

  return (
    <div className='absolute inset-0 bg-gray-100'>
      {progress && <PageProgress />}
      <MapProvider style={{display: progress ? 'none' : 'block'}}>
        <ZoomContainer>
          <SVG
            id='svgMap'
            cacheRequests={true}
            onError={error => console.error(error.message)}
            onLoad={() => {
              updateSvgData()
              hideProgress()
              if (target) {
                paintSelected(selectEl(`#${target}`))
              }
            }}
            src={schemeUrl}
          />
          <Path mapViewBox={mapViewBox} />
        </ZoomContainer>
      </MapProvider>
    </div>
  )
}

Map.propTypes = {
  schemeUrl: PropTypes.string,
  progress: PropTypes.bool,
  target: PropTypes.string,
  hideProgress: PropTypes.func,
  setTarget: PropTypes.func
}

/**
 * Получение состояния ссылки на схему
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const mapState = state => {
  return {
    schemeUrl: state.floor.url,
    progress: state.map.progress,
    target: state.map.target
  }
}

/**
 * Скрытие прогресса (загрузки)
 * @param {function} dispatch Запрос на установку
 * @returns {object} Установка
 */
const mapDispatch = dispatch => {
  return {
    hideProgress: () => dispatch(hideProgress()),
    setTarget: target => dispatch(setTargetForm(target))
  }
}

export default connect(mapState, mapDispatch)(Map)
