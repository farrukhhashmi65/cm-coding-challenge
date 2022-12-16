import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dropdown from '../Dropdown'

describe('Dropdown', () => {
  it('renders the label and dropdown items', () => {
    const label = 'Select an option'
    const value = 'Option 1'
    const onSelect = jest.fn()
    const dropdownList = ['Option 1', 'Option 2', 'Option 3']

    const { getByText, getByTestId } = render(
      <Dropdown
        label={label}
        value={value}
        onSelect={onSelect}
        dropdownList={dropdownList}
      />
    )

    const dropdownLabel = getByTestId("dropdownLabel")
    expect(dropdownLabel).toBeInTheDocument()
    const option = getByText(value)
    expect(option).toBeInTheDocument()
    const select = getByTestId("selectInput").querySelector('input');
    expect(select).toHaveValue(value)

  })

  it('calls the onSelect function when an option is selected', () => {
    const label = 'Select an option'
    const value = 'Option 1'
    const onSelect = jest.fn()
    const dropdownList = ['Option 1', 'Option 2', 'Option 3']

    const { getByTestId } = render(
      <Dropdown
        label={label}
        value={value}
        onSelect={onSelect}
        dropdownList={dropdownList}
      />
    )

    const select = getByTestId("selectInput").querySelector('input');
    fireEvent.change(select, { target: { value: 'Option 2' } })
    expect(onSelect).toHaveBeenCalledWith('Option 2')
  })
})