import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '../app/_components/Navbar'

describe('Page', () => {
  it('renders a navbar', () => {
    render(<Navbar />)
 
    const navbar = screen.getByRole('navigation');
 
    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveTextContent('SpaceX');
  })
})