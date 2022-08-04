import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProductCard from './index';
import MockContexProvider from '../../test/MockContextProvider';

const testProps = {
  imgUrl:
    'https://phoneslab.net/palestine/wp-content/uploads/sites/15/2021/09/max4-600x600.jpg',
  name: 'iphone 13 pro max',
  price: 5000,
  productId: 1,
};

describe('ProductCard component', () => {
  it('Should render product card info in the right components', async () => {
    render(
      <MockContexProvider>
        <ProductCard {...testProps} />
      </MockContexProvider>,
    );
    const productImg = await screen.findByTestId('productImg');
    const productName = await screen.findByTestId('productName');
    const productPrice = await screen.findByTestId('productPrice');
    expect(productName.textContent).toBe('iphone 13 pro max');
    expect(productPrice.textContent).toBe('$5,000.00');
    expect(productImg.getAttribute('src')).toBe(
      'https://phoneslab.net/palestine/wp-content/uploads/sites/15/2021/09/max4-600x600.jpg',
    );
  });

  it('Should navigate to product page when click on the container', async () => {
    render(
      <MockContexProvider>
        <ProductCard {...testProps} />
      </MockContexProvider>,
    );
    const productCardContainer = await screen.findByTestId(
      'productCardContainer',
    );

    await userEvent.click(productCardContainer);
    expect(window.location.pathname).toBe('/products/1');
  });
});
