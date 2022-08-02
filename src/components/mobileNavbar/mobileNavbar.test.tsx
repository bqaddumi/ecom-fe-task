import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockContexProviderWithValue from '../../test/MockContextProviderWithValue';
import MobileNavbar from './index';
import { NAVBAR_ITEMS } from '../../consts';

describe('MobileNavbar component', () => {
  const setup = () =>
    render(
      <MockContexProviderWithValue
        value={{ totalQuantity: 40, totalFavorite: 30, isDark: true }}
      >
        <MobileNavbar />
      </MockContexProviderWithValue>,
    );

  it('should render menu items', async () => {
    setup();
    NAVBAR_ITEMS.forEach(
      async ({ name, link }: { name: string; link: string }, index: number) => {
        const menuElement = await screen.findByTestId(`menuItem${index}`);
        expect(menuElement.textContent).toBe(name);
      },
    );
  });

  it('should be able to click on menu icon and open the list', async () => {
    setup();
    const iconButton = await screen.findByTestId('iconButton');
    expect(iconButton).toBeTruthy();
    await userEvent.click(iconButton);
  });

  it('should have LIGHT lable on theme toggle button in list menu', async () => {
    setup();
    const iconButton = await screen.findByTestId('iconButton');
    expect(iconButton).toBeTruthy();
    await userEvent.click(iconButton);
    const themeToggleButton = await screen.findByTestId('themeToggleButton');
    expect(themeToggleButton.textContent).toBe('light');
  });

  it('should have correct favorite and total quantity numbers on the bedges', async () => {
    setup();
    const iconButton = await screen.findByTestId('iconButton');
    await userEvent.click(iconButton);
    const mobileMenuTotalQuantityBadge = await screen.findByTestId(
      'mobileMenuTotalQuantityBadge',
    );
    const mobileTotalFav = await screen.findByTestId('mobileTotalFav');
    const mobileTotalQuantity = await screen.findByTestId(
      'mobileTotalQuantity',
    );
    expect(mobileMenuTotalQuantityBadge.textContent).toBe('40');
    expect(mobileTotalQuantity.textContent).toBe('40');
    expect(mobileTotalFav.textContent).toBe('30');
  });
});
