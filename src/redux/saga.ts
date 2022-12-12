import { all } from 'redux-saga/effects'
import { watchAbsencesSaga } from './sagas/absencesSaga'

// Root Saga
export default function * (): any {
  yield all([
    watchAbsencesSaga()
  ])
}
