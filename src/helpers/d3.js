import {interpolateString} from 'd3-interpolate'
import {select, selectAll} from 'd3-selection'
import {line} from 'd3-shape'

/**
 * Получение значения view box
 * @returns {string} view box
 */
export const getViewBox = () => select('#svgMap').attr('viewBox')

/**
 * Получение элемента по значению
 * @param {*} value значение
 * @returns {*} элемента
 */
export const selectEl = value => select(value)

/**
 * Получение элементов по значению
 * @param {string} value значение
 * @returns {*} элементы
 */
export const selectEls = value => selectAll(value)

/**
 * Получение линии svg
 * @returns {*} Линия
 */
export const getLine = () => line()

/**
 * Интерполяция строки
 * @param {number} len Длина строки
 * @returns {*} Интерполяция
 */
export const interpolateStr = len =>
  interpolateString(`0, ${len}`, `${len}, ${len}`)
