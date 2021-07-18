import { screen, render } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
    test('it shows a submit button for mailing list form', () => {
        render(<Home />)
        const button = screen.getAllByRole('button')[0];
        expect(button).toBeInTheDocument();
    });

    test('it renders first line of paragraph on homepage', () => {
        render(<Home />)
        expect(screen.getByText(/Hey there! Thank you for checking out my personal blog for my travels./i)).toBeInTheDocument()
    });
})