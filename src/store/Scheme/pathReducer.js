import {SET_PATH, RESET_PATH} from '../types'

/**
 * Обработчик состояния пути
 * @param {object[]} state Состояние
 * @param {object} action Действие
 * @returns {object[]} Состояние
 */
export default (state = [], action) => {
  switch (action.type) {
    case SET_PATH:
      return action.payload
    case RESET_PATH:
      return []
    default:
      return state
  }
}
