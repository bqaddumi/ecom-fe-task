import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import ProductInfo from './index';

const testProps = {
  desc: 'desc from test',
  moreInfo: 'more info from test',
  reviews: 'good product from test',
};

describe('ProductInfo component', () => {
  it('should render description tab panel when mount the component', async () => {
    render(<ProductInfo {...testProps} />);
    const detailsTabPanel = await screen.findAllByText('desc from test');
    expect(detailsTabPanel.length).toBe(1);
  });

  it('should render info tab panel when click on info tab', async () => {
    render(<ProductInfo {...testProps} />);
    const infoTab = await screen.findByTestId('MORE INFORMATIONTab');
    await act(() => {
      infoTab.click();
    });

    const tabPanel = await screen.findAllByText('more info from test');
    expect(tabPanel.length).toBe(1);
  });

  it('should render reviews tab panel when click on reviews tab', async () => {
    render(<ProductInfo {...testProps} />);
    const revTab = await screen.findByTestId('REVIEWSTab');
    await act(() => {
      revTab.click();
    });
    const tabPanel = await screen.findAllByText('good product from test');
    expect(tabPanel.length).toBe(1);
  });
});
