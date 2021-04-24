import {createSelector} from 'reselect'
import {getSchemeRooms, getSchemeFloorUrls} from '@/handlers/api/schemeHandler'

/**
 * Селектор схемы
 * @param {object} state Состояние
 * @returns {object} Данные о схеме
 */
export const selectSchemeData = state => state.schemeData.data

export const selectSchemeFloorsInfo = createSelector(
  [selectSchemeData],
  data => getSchemeFloorUrls(data)
)

export const selectSchemeRooms = createSelector(
  [selectSchemeData],
  data => getSchemeRooms(data)
)
