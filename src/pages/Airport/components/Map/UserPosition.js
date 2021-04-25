import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * Позиция пользователя на схеме
 * @param {string} mapViewBox ViewBox карты
 * @param {number} userX Координата x
 * @param {number} userY Координата y
 * @param {number} userZ Координата z (этаж)
 * @param {number} currentFloor Текущий номер этажа
 * @returns {JSX.Element} Отметка пользователя
 */
function UserPosition({mapViewBox, userX, userY, userZ, currentFloor}) {
  return (
    <>
      {currentFloor === userZ &&
      <svg viewBox={mapViewBox ? mapViewBox : '0 0 0 0'}>
        <circle
          className='innerCircle'
          cx={userX}
          cy={userY}
          r='10'
          fill='#d02626'
          stroke='#ff3b00'
          strokeWidth='1'
          strokeOpacity='0.5'
        >
          <animate
            attributeType='CSS'
            attributeName='stroke-width'
            begin='0s'
            dur='2s'
            repeatCount='indefinite'
            from='2'
            to='50'
          />
        </circle>
      </svg>
      }
    </>
  )
}

UserPosition.propTypes = {
  mapViewBox: PropTypes.node,
  userX: PropTypes.number,
  userY: PropTypes.number,
  userZ: PropTypes.number,
  currentFloor: PropTypes.number
}

/**
 * Получение состояния ссылки на схему
 * @param {object} state Состояние
 * @returns {object} Значения состояний
 */
const mapState = state => {
  return {
    userX: state.userPosition.x,
    userY: state.userPosition.y,
    userZ: state.userPosition.z,
    currentFloor: state.floor.num
  }
}

export default connect(mapState, null)(UserPosition)
