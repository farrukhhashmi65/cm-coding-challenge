import * as Actions from '../actions/absencesActions'

export const initialState: any = {
  error: null,
  loading: true
}

export const absencesReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case Actions.getAbsencesSuccess:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default absencesReducer
