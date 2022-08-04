import { render, screen } from '@testing-library/react';
import { BRANDS_IMAGES } from '../../consts';
import Brands from './index';

describe('Brands component', () => {
  it('should render brands images', async () => {
    render(<Brands />);

    const brands = await BRANDS_IMAGES.map(
      async (brand: string, index: number) =>
        await screen.findByTestId(`brand${index}`),
    );

    let i = 0;
    for (const brand of brands) {
      expect((await brand).getAttribute('src')).toBe(BRANDS_IMAGES[i]);
      i++;
    }
  });
});
