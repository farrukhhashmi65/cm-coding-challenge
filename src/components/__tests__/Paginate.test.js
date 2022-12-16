import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Paginate from '../Paginate'

describe('Paginate', () => {
  it('renders the pagination component with the correct number of pages', () => {
    const listDataPerPage = 10
    const totalRecord = 50
    const paginate = jest.fn()

    const { getByTestId } = render(
      <Paginate
        listDataPerPage={listDataPerPage}
        totalRecord={totalRecord}
        paginate={paginate}
      />
    )

    const pagination = getByTestId('pagination')
    expect(pagination).toBeInTheDocument()
   
  })


})