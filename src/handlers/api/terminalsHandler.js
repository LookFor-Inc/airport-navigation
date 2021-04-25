import terminals from '@/data/terminals'

/**
 * Проверка наличия терминала
 * @param {string} terminalId Id терминала
 * @returns {boolean} Наличие
 */
export function isTerminalExist(terminalId) {
  return terminals.filter(terminal => terminal.id === terminalId).length > 0
}

/**
 * Получение данных о терминале
 * @param {string} terminalId Id терминала
 * @returns {*} Json данные
 */
export function getTerminalJsonData(terminalId) {
  return terminals.filter(terminal => terminal.id === terminalId)[0]
}
