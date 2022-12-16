import * as React from 'react'
import { render } from '@testing-library/react'
import HighlightCard from '../HighlightCard'

describe('HighlightCard', () => {
  it('renders with the correct styles', () => {
    const { getByTestId } = render(
      <HighlightCard data-testid="card">
        This is a highlight card
      </HighlightCard>
    )

    const card = getByTestId('card')
    expect(card).toBeInTheDocument()
    expect(card).toHaveStyle(`
      font-size: 0.875rem;
      line-height: 1.43;
      font-weight: 400;
      padding: 8px;
      text-align: center;
      color: #fff;
    `)
  })
})