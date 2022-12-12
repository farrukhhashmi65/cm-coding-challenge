import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { appReducer } from './appReducer'
import logger from 'redux-logger'

const middleware = [logger]

// Adding the Redux Middleware

const sagaMiddleware = createSagaMiddleware()
middleware.push(sagaMiddleware)

export const store = configureStore({
  reducer: appReducer,
  middleware: [...middleware]
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
