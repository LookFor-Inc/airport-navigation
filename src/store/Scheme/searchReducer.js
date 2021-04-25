import {SET_SEARCH_FROM, SET_SEARCH_TO, CLEAR_SEARCH} from '../types'

const initialState = {
  from: {
    target: '',
    value: ''
  },
  to: {
    target: '',
    value: ''
  }
}

/**
 * Обработчик состояния формы маршрута
 * @param {object} state Состояние
 * @param {object} action Action creator
 * @returns {object} Объект состояния
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TO:
      return {
        ...state,
        to: action.payload
      }
    case SET_SEARCH_FROM:
      return {
        ...state,
        from: action.payload
      }
    case CLEAR_SEARCH:
      return initialState
    default:
      return state
  }
}
