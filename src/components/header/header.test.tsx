import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './index';
import MockContexProviderWithValue from '../../test/MockContextProviderWithValue';

describe('Header component', () => {
  const setup = () =>
    render(
      <MockContexProviderWithValue
        value={{ totalQuantity: 40, totalFavorite: 30 }}
      >
        <Header />
      </MockContexProviderWithValue>,
    );

  it('Should change to dark theme', async () => {
    setup();
    const toggleDarkBtn = await screen.findByTestId('toggleDarkBtn');
    await userEvent.click(toggleDarkBtn);
    // button should have the opposite word of current them ex: if in dark theme button label should be light
    expect(toggleDarkBtn.textContent).toBe('light');
  });

  it('Should display right numbers in badges for cart icon and favorite icon', async () => {
    setup();
    const totalFavorite = await screen.findByTestId('totalFavorite');
    const totalQuantity = await screen.findByTestId('totalQuantity');
    expect(totalFavorite.textContent).toBe('30');
    expect(totalQuantity.textContent).toBe('40');
  });

  it('Should navigate to cart when click on cart icon', async () => {
    setup();
    const cartIcon = await screen.findByTestId('cartIcon');
    userEvent.click(cartIcon);
    expect(window.location.pathname).toBe('/cart');
  });
});
