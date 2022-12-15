import { takeLatest, call, put } from 'redux-saga/effects'
import * as Actions from '../actions/absencesActions'
import { Network, Endpoints } from '../../networking'

// watcher
export function * watchAbsencesSaga (): any {
  yield takeLatest(
    Actions.GET_ABSENCES_REQUEST,
    getAbsences
  )
  yield takeLatest(
    Actions.GET_ABSENCES_DATA_REQUEST,
    getAbsencesData
  )
}

export function * getAbsencesData (): any {
  try {
    const response = yield call(getAbsencesTypeAPI)
    if (response.status === 200) {
      yield put(Actions.getAbsencesDataSuccess(response.data))
    } else {
      yield put(Actions.getAbsencesDataSuccess({ absencesTypes: [], totalAbsences: 0 }))
    }
  } catch (error) {
    yield put(Actions.getAbsencesDataFailure(error))
  }
}

export function * getAbsences (action: any): any {
  try {
    const membersResponse = yield call(getMembersAPI)
    const absencesResponse = yield call(getAbsencesAPI, action)
    const { message, payload } = absencesResponse.data
    if (message === 'Success') {
      const finalData = payload.map((a: any) => {
        const { payload: members } = membersResponse.data
        a.user = members.find((m: any) => m.userId === a.userId)
        return a
      })

      yield put(Actions.getAbsencesSuccess(finalData))
    } else {
      yield put(Actions.getAbsencesSuccess([]))
    }
  } catch (error) {
    yield put(Actions.getAbsencesFailure(error))
  }
}

// Api call to get getAbsences
export async function getAbsencesAPI (action: any): Promise<any> {
  const filterObject: any = action.payload
  const queryString: any = Object.keys(filterObject).map((key: string) => `${String(key)}=${String(filterObject[key])}`).join('&')
  const url: any = `${Endpoints.GET_ABSENCES_ENDPOINT}?${String(queryString)}`
  console.log('url', url)
  const config: any = {
    method: 'GET',
    url
  }
  return await Network.makeNetworkCall(config)
}

// Api call to get get Members
export async function getMembersAPI (): Promise<any> {
  const url = Endpoints.GET_MEMBERS_ENDPOINT
  const config: any = {
    method: 'GET',
    url
  }
  return await Network.makeNetworkCall(config)
}

export async function getAbsencesTypeAPI (): Promise<any> {
  const url = Endpoints.GET_ABSENCES_DATA_ENDPOINT
  const config: any = {
    method: 'GET',
    url
  }
  return await Network.makeNetworkCall(config)
}
