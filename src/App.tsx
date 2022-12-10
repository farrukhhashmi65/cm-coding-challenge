/* eslint-disable */
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import customTheme from './theme/customTheme';
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n";

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={customTheme}>
      <I18nextProvider i18n={i18n}>
        <h2>{t('appTitle')}</h2>
        <Button variant="contained" color="primary">Primary</Button>
        <Button color="secondary" variant="contained">Secondary</Button>
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default App

