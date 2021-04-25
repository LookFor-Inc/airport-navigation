/**
 * Значение даты для инпута
 * @param {number} delta Количество дней вперёд
 * @returns {string} Дата
 */
export function getDateValueInput(delta = 0) {
  const local = new Date()
  local.setDate(local.getDate() + delta)
  local.setMinutes(local.getMinutes() - local.getTimezoneOffset())
  return local.toJSON().slice(0, 10)
}

/**
 * Получиние текущего времени
 * @returns {string} Строка со временем
 */
export function getCurrentTimeString() {
  const now = new Date()
  let seconds = now.getMinutes()

  if (seconds.toString().length < 2) {
    seconds = '0' + seconds
  }

  return now.getHours() + ':' + seconds
}
