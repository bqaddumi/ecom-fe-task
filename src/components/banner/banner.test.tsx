import { render, screen } from '@testing-library/react';
import { SECTION_FOOTER, LEARN_MORE } from '../../consts';
import Banner from './index';

describe('Banner component', () => {
  it('should render banner in Windows viewport', async () => {
    render(<Banner />);
    const learnMoreBtn = await screen.findByTestId('learn-more-button');
    const sectionFooter = await screen.findByTestId('section-footer');
    expect(learnMoreBtn.textContent).toBe(LEARN_MORE);
    expect(sectionFooter.textContent).toBe(SECTION_FOOTER);
  });
});
