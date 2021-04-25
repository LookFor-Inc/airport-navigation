import {SET_USER_POSITION} from '../types'

const initialState = {
  x: 5446,
  y: 4594,
  z: 3
}

/**
 * Обработчик состояний
 * @param {object} state Состояние
 * @param {object} action Событие
 * @returns {object} Объект состояния
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_POSITION:
      return {
        x: action.payload.x,
        y: action.payload.y,
        z: action.payload.z
      }
    default:
      return state
  }
}
