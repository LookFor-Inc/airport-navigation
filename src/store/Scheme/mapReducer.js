import {HIDE_PROGRESS, SAVE_TRANSFORM, SET_TARGET_FORM, SHOW_PROGRESS} from '../types'

const initialState = {
  progress: true,
  transform: {
    x: 0,
    y: 0,
    k: 1
  },
  target: null
}

/**
 * Обработчик состояния карты
 * @param {object} state Состояние
 * @param {object} action Событие
 * @returns {object} Объект состояния
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PROGRESS:
      return {
        ...state,
        progress: true
      }
    case HIDE_PROGRESS:
      return {
        ...state,
        progress: false
      }
    case SAVE_TRANSFORM:
      const {transform} = action.payload
      return {
        ...state,
        transform: {
          x: transform.x,
          y: transform.y,
          k: transform.k
        }
      }
    case SET_TARGET_FORM:
      return {
        ...state,
        target: action.payload.target
      }
    default:
      return state
  }
}
