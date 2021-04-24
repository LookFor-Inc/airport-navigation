/**
 * Путевые псевдонимы, которые могут быть использованы в проекте
 * @param {string} prefix Префикс пути
 * @returns {object} Объект с псевдонимами
 */
const aliases = (prefix = './src') => ({
  '@': `${prefix}`
})

module.exports = aliases
