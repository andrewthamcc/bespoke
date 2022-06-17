import { screen, render } from '@testing-library/react'
import { Footer } from '.'

describe('footer', () => {
  it('renders a footer!', () => {
    render(<Footer />)

    expect(screen.getByRole('footer')).toBeInTheDocument()
    expect(screen.getByText(/outdoor adventure/i)).toBeInTheDocument()
  })
})
