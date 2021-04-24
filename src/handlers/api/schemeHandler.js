import {isObjEmpty} from '@/helpers/common'

/**
 * Получение комнат схемы
 * @param {object} scheme Объект здания
 * @returns {[]} Список из объектов комнат для autocomplete
 */
export function getSchemeRooms(scheme) {
  if (isObjEmpty(scheme)) {
    return []
  }
  const response = []
  Object.entries(scheme.floors)
    .forEach(flr =>
      Object.entries(flr[1].rooms)
        .forEach(room => response.push({
          floor: `Этаж ${flr[0]}`,
          room: {
            target: room[0],
            title: room[1].title
          }
        })))
  response.sort((a, b) =>
    a.floor === b.floor && a.room.title > b.room.title ? 1 : -1)
  return response
}

/**
 * Получение информации об этажах
 * @param {object} scheme Объект здания
 * @returns {{floorNum: number, url: string}[]|[]} Список объектов с информацией об этаже
 */
export function getSchemeFloorUrls(scheme) {
  if (isObjEmpty(scheme)) {
    return []
  }

  return Object.entries(scheme.floors)
    .map(([floorNum, floorData]) => {
      return {
        floorNum: parseInt(floorNum),
        url: floorData.url
      }
    })
    .sort(((a, b) => b.floorNum - a.floorNum))
}

/**
 * Получение номера этажа по комнате
 * @param {object} srcScheme Исходные данные о схеме
 * @param {string} roomTarget Ключевое название комнаты
 * @returns {number} Номер этажа
 */
export function getFloorNumByRoomTarget(srcScheme, roomTarget) {
  if (isObjEmpty(srcScheme)) {
    return -999
  }
  return parseInt(
    Object.keys(srcScheme.floors)
      .find(flrNum =>
        Object.keys(srcScheme.floors[flrNum].rooms)
          .find(id => id === roomTarget))
  )
}

/**
 * Получение объекта комнаты по ключевому значению
 * @param {object} schemeRooms Комнаты на схеме
 * @param {string} target Идентификатор комнаты
 * @returns {object|null} Объект комнаты
 */
export function getRoomByTarget(schemeRooms, target) {
  for (const {room} of schemeRooms) {
    if (room.target === target) {
      if (room.target.startsWith('aud')) {
        room.type = 'aud'
      } else if (room.target.startsWith('wc')) {
        room.type = 'wc'
      } else if (room.target.startsWith('din')) {
        room.type = 'din'
      } else if (room.target.startsWith('gym')) {
        room.type = 'gym'
      }
      return room
    }
  }
  return null
}
