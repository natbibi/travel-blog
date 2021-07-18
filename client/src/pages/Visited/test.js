import { screen, render } from '@testing-library/react';
import Visited from '.';

describe('Visited', () => {
    test('it shows page header', () => {
        render(<Visited />)
        expect(screen.getAllByRole('heading')[0].textContent).toContain('Leave Only Footprints');
    })
})