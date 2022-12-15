export type ReducerInitialState = null | {
  loading: boolean
  response: any
  error: any
}

export const initialState: any = {
  loading: false,
  response: null,
  error: null
}

/**
   * @func Reducer getBasicReducer
   * @param state
   * @param action
   */

export default function getBasicReducer (actions: any, customInitialState: ReducerInitialState = null): any {
  const { add, success, request, failure, clear } = actions
  return function (state = (customInitialState != null) || initialState, action: any) {
    switch (action.type) {
      /* CRUD */
      case add:
        return {
          ...state,
          ...action.payload
        }
      case request:
        return {
          ...state,
          loading: true,
          response: null,
          error: null
        }

      case success:
        return {
          ...state,
          loading: false,
          response: action.payload,
          error: null
        }

      case failure:
        return {
          ...state,
          loading: false,
          response: null,
          error: action.payload
        }
      case clear:
        return {
          ...initialState
        }
      default:
        return state
    }
  }
}
