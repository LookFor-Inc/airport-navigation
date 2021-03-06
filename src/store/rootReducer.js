import {combineReducers} from 'redux'
import schemeDataReducer from '@/store/Scheme/schemeDataReducer'
import searchReducer from '@/store/Scheme/searchReducer'
import userPositionReducer from '@/store/Scheme/userPositionReducer'
import floorReducer from './Scheme/floorReducer'
import mapReducer from './Scheme/mapReducer'
import pathReducer from './Scheme/pathReducer'

export const rootReducer = combineReducers({
  map: mapReducer,
  path: pathReducer,
  floor: floorReducer,
  schemeData: schemeDataReducer,
  search: searchReducer,
  userPosition: userPositionReducer
})
