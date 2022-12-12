import { takeLatest, call, put } from 'redux-saga/effects'
import * as Actions from '../actions/absencesActions'
import { Network, Endpoints } from '../../networking'

// watcher for absences
export function * watchAbsencesSaga (): any {
  yield takeLatest(
    Actions.GET_ABSENCES_REQUEST,
    getAbsences
  )
}

export function * getAbsences (action: any): any {
  try {
    const response = yield call(getAbsencesCall, action)
    if (response !== null) {
      yield put(Actions.getAbsencesSuccess({ practices: response.data }))
    } else {
      yield put(Actions.getAbsencesSuccess({ practices: [] }))
    }
  } catch (error) {
    yield put(Actions.getAbsencesFailure(error))
  }
}

// Api call to get getAbsences
export async function getAbsencesCall (action: any): Promise<any> {
  const url = Endpoints.GET_ABSENCES_ENDPOINT
  const config: any = {
    method: 'GET',
    url
  }
  return await Network.makeNetworkCall(config)
}
