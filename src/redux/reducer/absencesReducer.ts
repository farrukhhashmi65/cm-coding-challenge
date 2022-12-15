import { combineReducers } from 'redux'
import getBasicReducer from '../basicReducer'
import * as Actions from '../actions/absencesActions'

export const absencesReducer = combineReducers({
  absences: getBasicReducer({
    request: Actions.GET_ABSENCES_REQUEST,
    success: Actions.GET_ABSENCES_SUCCESS,
    failure: Actions.GET_ABSENCES_FAILURE
  }),
  absencesData: getBasicReducer({
    request: Actions.GET_ABSENCES_DATA_REQUEST,
    success: Actions.GET_ABSENCES_DATA_SUCCESS,
    failure: Actions.GET_ABSENCES_DATA_FAILURE
  })
})

export default absencesReducer
