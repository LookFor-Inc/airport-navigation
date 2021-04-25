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

/**
 * Расчёт длины общего пути
 * @param {[{z: number, r: [[number]]}]} path Полный путь
 * @returns {number|null} Длина пути
 */
export function getPathLength(path) {
  if (!path || path.length === 0) {
    return null
  }
  const pathLine = []
  path.map(p => pathLine.push(...p.r))
  return pathLine.reduce((acc, currValue, idx, arr) => {
    if (idx === 0) {
      return 0
    }
    const dx = Math.abs(arr[idx - 1][0] - currValue[0])
    const dy = Math.abs(arr[idx - 1][1] - currValue[1])
    return acc + Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
  }, 0)
}
