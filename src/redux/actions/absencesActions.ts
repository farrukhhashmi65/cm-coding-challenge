export const GET_ABSENCES_REQUEST = 'GET_ABSENCES_REQUEST'
export const GET_ABSENCES_FAILURE = 'GET_ABSENCES_FAILURE'
export const GET_ABSENCES_SUCCESS = 'GET_ABSENCES_SUCCESS'
export const GET_ABSENCES_DATA_REQUEST = 'GET_ABSENCES_DATA_REQUEST'
export const GET_ABSENCES_DATA_FAILURE = 'GET_ABSENCES_DATA_FAILURE'
export const GET_ABSENCES_DATA_SUCCESS = 'GET_ABSENCES_DATA_SUCCESS'

export const getAbsencesDataRequest = (): any => {
  return ({
    type: GET_ABSENCES_DATA_REQUEST
  })
}

export const getAbsencesDataSuccess = (payload: any): any => {
  return ({
    type: GET_ABSENCES_DATA_SUCCESS,
    payload
  })
}

export const getAbsencesDataFailure = (payload: any): any => {
  return ({
    type: GET_ABSENCES_DATA_FAILURE,
    payload
  })
}

export const getAbsencesRequest = (payload: any): any => {
  return ({
    type: GET_ABSENCES_REQUEST,
    payload
  })
}

export const getAbsencesSuccess = (payload: any): any => {
  return ({
    type: GET_ABSENCES_SUCCESS,
    payload
  })
}

export const getAbsencesFailure = (payload: any): any => {
  return ({
    type: GET_ABSENCES_FAILURE,
    payload
  })
}
