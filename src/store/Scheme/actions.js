import {getTerminalJsonData, isTerminalExist} from '@/handlers/api/terminalsHandler'
import {
  FETCH_SCHEME_FULFILLED, FETCH_SCHEME_REJECTED, HIDE_PROGRESS, RESET_PATH, SAVE_TRANSFORM, SET_FLOOR_NUM,
  SET_FLOOR_FULL_DATA, SET_PATH, SET_SEARCH_FROM, SET_SEARCH_TO, CLEAR_SEARCH, SET_TARGET_FORM, SHOW_PROGRESS
} from '../types'

/**
 * Запись исходных данных о схеме
 * @param {string} id Идентификатор схемы
 * @returns {object} Action creator
 */
export function fetchSchemeAsync(id) {
  return dispatch => {
    const isExist = isTerminalExist(id)

    if (isExist) {
      const jsonData = getTerminalJsonData(id).data
      return dispatch(fetchSchemeFulfilled(id, jsonData))
    }

    return dispatch(fetchSchemeRejected(id))
  }
}

/**
 * Успешное загрузка схемы
 * @param {number} id Id схемы
 * @param {*} jsonData Данные о схеме
 * @returns {{payload: {data, id}, type: string}} Action creator
 */
export function fetchSchemeFulfilled(id, jsonData) {
  return {
    type: FETCH_SCHEME_FULFILLED,
    payload: {
      id: id,
      data: jsonData
    }
  }
}

/**
 * Ошибка при загрузки схемы
 * @param {number} id Id схемы
 * @returns {{payload: {id}, type: string}} Action creator
 */
export function fetchSchemeRejected(id) {
  return {
    type: FETCH_SCHEME_REJECTED,
    payload: {
      id: id
    }
  }
}

/**
 * Установка данных об этаже в Redux
 * @param {number} id Id этажа
 * @param {number} num Номер этажа
 * @param {string} url Схема этажа
 * @returns {object} Action creator
 */
export function setFloorFullData(id, num, url) {
  return {
    type: SET_FLOOR_FULL_DATA,
    payload: {
      id,
      num,
      url
    }
  }
}

/**
 * Установка пути
 * @param {object[]} path Путь
 * @returns {object} Action creator
 */
export function setPath(path) {
  return {
    type: SET_PATH,
    payload: path
  }
}

/**
 * Сброс пути
 * @returns {object} Action creator
 */
export function resetPath() {
  return {
    type: RESET_PATH
  }
}

/**
 * Показать анимацию загрузки карты
 * @returns {object} Action creator
 */
export function showProgress() {
  return {
    type: SHOW_PROGRESS
  }
}

/**
 * Скрыть анимацию загрузки карты
 * @returns {object} Action creator
 */
export function hideProgress() {
  return {
    type: HIDE_PROGRESS
  }
}

/**
 * Установка всплывающего окна для построения маршрута
 * @param {string} target Идентификатор аудитории
 * @returns {object} Action creator
 */
export function setTargetForm(target) {
  return {
    type: SET_TARGET_FORM,
    payload: {
      target
    }
  }
}

/**
 * Сохранение состояния контейнера карты
 * @param {object} transform Объект с состоянием карты
 * @returns {object} Action creator
 */
export function saveTransform(transform) {
  return {
    type: SAVE_TRANSFORM,
    payload: {
      transform
    }
  }
}

/**
 * Установка 'Куда'
 * @param {string} target Идентификатор помещения
 * @param {string} value Название помещения
 * @returns {object} Action creator
 */
export function setSearchTo(target, value) {
  return {
    type: SET_SEARCH_TO,
    payload: {
      target: target,
      value: value
    }
  }
}

/**
 * Установка 'Откуда'
 * @param {string} target Идентификатор помещения
 * @param {string} value Название помещения
 * @returns {object} Action creator
 */
export function setSearchFrom(target, value) {
  return {
    type: SET_SEARCH_FROM,
    payload: {
      target: target,
      value: value
    }
  }
}

/**
 * Очистка формы маршрута
 * @returns {object} Action creator
 */
export function clearSearch() {
  return {
    type: CLEAR_SEARCH
  }
}

/**
 * Установка номера этажа
 * @param {number} num Номер этажа
 * @returns {object} Action creator
 */
export function setFloorNum(num) {
  return {
    type: SET_FLOOR_NUM,
    payload: {
      num
    }
  }
}
