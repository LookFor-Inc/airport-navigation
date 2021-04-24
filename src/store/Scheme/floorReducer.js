import {SET_FLOOR_FULL_DATA, SET_FLOOR_NUM} from '../types'

const initialState = {
  id: null,
  num: null,
  url: null
}

/**
 * Обработчик состояния этажей
 * @param {object} state Состояние
 * @param {object} action Событие (установка этажа и svg)
 * @returns {object} Объект состояния
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FLOOR_FULL_DATA:
      return {
        ...state,
        id: action.payload.id,
        num: action.payload.num,
        url: action.payload.url
      }
    case SET_FLOOR_NUM:
      return {
        ...state,
        num: action.payload.num
      }
    default:
      return state
  }
}
