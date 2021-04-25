import {flights} from '@/data/flights'

/**
 * Фильтрация рейсов
 * @param {string} type Тип
 * @param {string} from Откуда
 * @param {string} to Куда
 * @param {string} fromDate Диапазон времени
 * @param {string} toDate Диапазон времени
 * @returns {*} Результаты фильтрации
 */
export function filterFlights(type, from, to, fromDate, toDate) {
  const current = flights[type]

  const result = current.map(flight => {
    if (flight.from === from && flight.to === to) {
      return {
        type: type,
        ...flight
      }
    }
  })
  return result.filter(flight => flight !== undefined)
}
