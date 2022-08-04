import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { productTest } from '../../test/testVars';
import ProductDetails from './index';
import MockContexProvider from '../../test/MockContextProvider';

const testProps = {
  product: productTest,
};

describe('ProductDetails component', () => {
  it('Should render all the product info correctly (breadcrumbs, price, desc and name)', async () => {
    render(
      <MockContexProvider>
        <ProductDetails {...testProps} />
      </MockContexProvider>,
    );
    const breadcrumbs = await screen.findByTestId('breadcrumbs');
    const productName = await screen.findByTestId('productName');
    const price = await screen.findByTestId('price');
    const desc = await screen.findByTestId('desc');
    expect(breadcrumbs.innerHTML).toBe('Home / iphone 13 pro max');
    expect(productName.innerHTML).toBe('iphone 13 pro max');
    expect(price.innerHTML).toBe('$5,000.00');
    expect(desc.innerHTML).toBe('pro max no active');
  });

  it('Should have (1) in quantity box', async () => {
    render(
      <MockContexProvider>
        <ProductDetails {...testProps} />
      </MockContexProvider>,
    );
    const quantity = await screen.findByTestId('quantity');
    expect(quantity.innerHTML).toBe('1');
  });

  it('Should be able to increment the quantity and display the count in the box', async () => {
    render(
      <MockContexProvider>
        <ProductDetails {...testProps} />
      </MockContexProvider>,
    );
    const incrementBtn = await screen.findByTestId('incrementBtn');
    await act(() => {
      incrementBtn.click();
    });
    const quantity = await screen.findByTestId('quantity');
    expect(quantity.innerHTML).toBe('2');
  });

  it('Should not be able to decrement the quantity when the quantity is 1', async () => {
    render(
      <MockContexProvider>
        <ProductDetails {...testProps} />
      </MockContexProvider>,
    );
    const decrementBtn = await screen.findByTestId('decrementBtn');
    await act(() => {
      decrementBtn.click();
    });
    const quantity = await screen.findByTestId('quantity');
    expect(quantity.innerHTML).toBe('1');
  });

  it('Should be able to decrement the quantity when the quantity is grater than 1', async () => {
    render(
      <MockContexProvider>
        <ProductDetails {...testProps} />
      </MockContexProvider>,
    );
    const decrementBtn = await screen.findByTestId('decrementBtn');
    const incrementBtn = await screen.findByTestId('incrementBtn');

    const quantity = await screen.findByTestId('quantity');

    await act(() => {
      incrementBtn.click(); // increment by 1 to be 2
      incrementBtn.click(); // increment by 1 to be 3
    });

    await act(() => {
      decrementBtn.click();
    });

    expect(quantity.innerHTML).toBe('2');
  });
});
