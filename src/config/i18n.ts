/* eslint-disable */

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import english from '../localization/en.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...english
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
