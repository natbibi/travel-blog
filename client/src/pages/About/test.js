import { screen, render } from '@testing-library/react';
import About from '.';

describe('About', () => {
    test('it renders profile image', () => {
        render(<About />)
        const img = screen.queryByRole('img');
        expect(img).toBeInTheDocument();
    });

    test('it renders first line in paragraph on about page', () => {
        render(<About />)
        expect(screen.getByText(/Hi, I'm Natalie!/i)).toBeInTheDocument()
    })
})