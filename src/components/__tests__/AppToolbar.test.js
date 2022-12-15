import React from 'react'
import { render } from '@testing-library/react'
import AppToolbar from '../AppToolbar'

test('renders app title', () => {
  const { getByText } = render(<AppToolbar />)
  const appTitleElement = getByText(/appTitle/i)
  expect(appTitleElement).toBeInTheDocument()
})