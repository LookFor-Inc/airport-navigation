/**
 * Вспомогательная функция, которая конвертирует список в подходящий формат для автокомплита
 * @param {[object]} rooms Список из компнат
 * @returns {[]} Конвертированный список
 */
export default function convertRoomsToAutocompleteFormat(rooms) {
  const formattingSuggestions = []
  let tmp
  let curEl = -1
  rooms.map(item => {
    if (tmp !== item.floor) {
      tmp = item.floor
      formattingSuggestions.push({
        title: tmp,
        nestedSuggestions: [{
          title: item.room.title,
          target: item.room.target
        }]
      })
      curEl = curEl + 1
    } else {
      formattingSuggestions[curEl].nestedSuggestions.push({
        title: item.room.title,
        target: item.room.target
      })
    }
  })
  return formattingSuggestions
}
