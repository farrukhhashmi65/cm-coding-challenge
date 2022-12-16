import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import Filter from '../Filter'
import { Provider } from 'react-redux'
import { appReducer } from '../../../redux/appReducer'
import { I18nextProvider } from "react-i18next";
import i18n from '../../../config/i18n'

const store = configureStore({
    reducer: appReducer,
})


describe('Filter', () => {
    it('renders the filter form and calls the appropriate actions', () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <Filter />
                </I18nextProvider>
            </Provider>
        )
        const absenceTypeDropdown = getByLabelText('Absence Type')
        const startDateInput = getByLabelText('Start Date')
        const endDateInput = getByLabelText('End Date')
        const submitButton = getByText('Filter')

        fireEvent.click(absenceTypeDropdown)
        fireEvent.change(startDateInput, { target: { value: '2022-01-01' } })
        fireEvent.change(endDateInput, { target: { value: '2022-01-15' } })
        fireEvent.click(submitButton)

        expect(store.getState().absencesReducer.absencesData).toEqual({
            loading: true,
            error: null,
            response: null
          })
        
    })

    it('renders the filter snapshot', () => {
        const component = render(
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <Filter />
                </I18nextProvider>
            </Provider>
        )
     
        expect(component).toMatchSnapshot();
    })
})