import { render, screen } from '@testing-library/react';
import { NAVBAR_ITEMS } from '../../consts';
import MockContexProviderWithValue from '../../test/MockContextProviderWithValue';
import Navbar from './index';

describe('Navbar component', () => {
  const setup = () =>
    render(
      <MockContexProviderWithValue
        value={{ totalQuantity: 40, totalFavorite: 30, isDark: true }}
      >
        <Navbar />
      </MockContexProviderWithValue>,
    );
  it('should render banner in Windows viewport', async () => {
    setup();
    NAVBAR_ITEMS.forEach(
      async ({ name, link }: { name: string; link: string }, index: number) => {
        const menuElement = await screen.findByTestId(`navItem${index}`);
        expect(menuElement.textContent).toBe(name);
        expect(menuElement.getAttribute('href')).toBe(link);
      },
    );
  });
});
