import { combineReducers } from 'redux'
import absencesReducer from './reducer/absencesReducer'

// Combine Reducer - here we can add other reducers

export const appReducer = combineReducers({
  absencesReducer
})
