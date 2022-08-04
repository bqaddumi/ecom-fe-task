import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import EcomModal from './index';
import React from 'react';

const testProps = {
  isOpen: true,
  isCancelClicked: jest.fn(),
  isYesClicked: jest.fn(),
  handleCloseModal: jest.fn(),
  product: {
    id: 3,
    name: 'iphone 13',
    price: 3000,
    quantity: 1,
    totalPrice: 3000,
  },
};

describe('EcomModal component', () => {
  it('should right modal title and desc', async () => {
    render(<EcomModal {...testProps} />);
    const modalTitle = await screen.findByTestId('modalTitle');
    const modalDesc = await screen.findByTestId('modalDesc');
    expect(modalTitle.textContent).toBe('Delete iphone 13');
    expect(modalDesc.textContent).toBe(
      'Are you sure you want to delete 1 items of iphone 13?',
    );
  });
});
