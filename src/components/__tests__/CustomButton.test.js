import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import CustomButton from '../CustomButton'

test('renders custom button', () => {
  const { getByText } = render(<CustomButton>Button</CustomButton>)
  const buttonElement = getByText(/button/i)

  expect(buttonElement).toBeInTheDocument()
})

test('renders custom button with mouseOver', () => {
  const { getByText } = render(<CustomButton>Button</CustomButton>)
  const buttonElement = getByText(/button/i)

  fireEvent.mouseOver(buttonElement)

 
})