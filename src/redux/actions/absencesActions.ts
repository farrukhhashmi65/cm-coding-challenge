export const GET_ABSENCES_REQUEST = 'GET_ABSENCES_REQUEST'
export const GET_ABSENCES_FAILURE = 'GET_ABSENCES_FAILURE'
export const GET_ABSENCES_SUCCESS = 'GET_ABSENCES_SUCCESS'

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
