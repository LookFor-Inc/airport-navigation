import {isObjEmpty} from '@/helpers/common'

/**
 * Получение пути при наличии
 * @param {object} path Полный путь
 * @returns {object|null} Путь
 */
export function getPathIfExists(path) {
  if (isObjEmpty(path)) {
    return null
  }
  return path
}

/**
 * Получение пути, построенного на этаже
 * @param {[{z: number, r: [[number]]}]} path Полный путь
 * @param {number} floor Этаж
 * @returns {[]} Линия пути
 */
export function getPathOnFloor(path, floor) {
  return path
    .filter(p => p.z === floor)
    .map(p => p.r)
}
