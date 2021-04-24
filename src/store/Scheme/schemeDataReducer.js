import {FETCH_SCHEME_FULFILLED, FETCH_SCHEME_REJECTED} from '../types'

const initialState = {
  fetched: null,
  id: null,
  data: {}
}

/**
 * Обработчик состояния схемы
 * @param {object} state Состояние
 * @param {object} action Событие (данные о схеме)
 * @returns {object} Объект состояния
 */
export default (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case FETCH_SCHEME_FULFILLED:
      return {
        ...state,
        fetched: true,
        id: payload.id,
        data: payload.data
      }
    case FETCH_SCHEME_REJECTED:
      return {
        ...state,
        fetched: false,
        id: payload.id
      }
    default:
      return state
  }
}
