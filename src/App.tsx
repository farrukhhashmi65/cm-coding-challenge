import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import customTheme from './theme/customTheme'
import { I18nextProvider } from 'react-i18next'
import i18n from './config/i18n'
import AbsenceManager from './features/absenceManager'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App: React.FC<any> = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <I18nextProvider i18n={i18n}>
          <AbsenceManager />
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
