import { screen, render } from '@testing-library/react';
import Photos from '.';

describe('Visited', () => {
    test('it shows page header', () => {
        render(<Photos />)
        expect(screen.getAllByRole('heading')[0].textContent).toContain('Take Only Memories');
    })
})