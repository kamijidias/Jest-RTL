import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

describe('Greet', () => {
    test('renders correnctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/Hello/)
        expect(textElement).toBeInTheDocument()
    })
})

describe('Name', () => {
    test('render name', () => {
        render(<Greet name="Vishwas" />)
        const textElement = screen.getByText("Hello Vishwas")
        expect(textElement).toBeInTheDocument()
    })
})