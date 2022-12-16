import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import AbsenceManager from '../index'
import { Provider } from 'react-redux'
import { appReducer } from '../../../redux/appReducer'
import { I18nextProvider } from "react-i18next";
import i18n from '../../../config/i18n'

const store = configureStore({
    reducer: appReducer,
})


describe('AbsenceManager', () => {
    it('renders the AbsenceManager snapshot', () => {
        const component = render(
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <AbsenceManager />
                </I18nextProvider>
            </Provider>
        )
   
        expect(component).toMatchSnapshot();
        
    })
})