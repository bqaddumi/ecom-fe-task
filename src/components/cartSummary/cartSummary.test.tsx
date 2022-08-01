import { render, screen } from '@testing-library/react';
import CartSummary from './index';

const testProps = {
  products: [
    {
      id: 2,
      name: 'iphone 12 pro max',
      price: 2500,
      quantity: 3,
      totalPrice: 7500,
    },
    {
      id: 3,
      name: 'iphone 13',
      price: 3000,
      quantity: 1,
      totalPrice: 3000,
    },
  ],
  totalQuantity: 4,
  totalPrice: 10500,
};

describe('cartSummary component', () => {
  it('Should display correct cart price summary', async () => {
    render(<CartSummary {...testProps} />);
    const subtotal = await screen.findByTestId('subtotal');
    const shipping = await screen.findByTestId('shipping');
    const orderTotal = await screen.findByTestId('orderTotal');
    expect(subtotal.textContent).toBe('$10,500.00');
    expect(shipping.textContent).toBe('$5.00');
    expect(orderTotal.textContent).toBe('$10,505.00');
  });
});
