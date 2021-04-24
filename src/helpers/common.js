/**
 * Проверка на наличие элементов в объекте
 * @param {object} obj Объект
 * @returns {boolean} Пустой или нет
 */
export const isObjEmpty = obj => !Object.keys(obj).length

/**
 * Получение последнего элемента массива
 * @param {any[]} array Массив
 * @returns {any} Последний элемент
 */
export const getLastArrayItem = array => array[array.length - 1]
