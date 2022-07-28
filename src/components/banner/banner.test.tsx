import { render, screen } from '@testing-library/react';
import { SECTION_FOOTER, LEARN_MORE } from '../../consts';
import Banner from './index';

// const resizeWindow = (x: number, y: number) => {
//   window.innerWidth = x;
//   window.innerHeight = y;
//   window.dispatchEvent(new Event('resize'));
// };

describe('Banner component', () => {
  it('should render banner in Windows viewport', async () => {
    render(<Banner />);
    const learnMoreBtn = await screen.findByTestId('learn-more-button');
    const sectionFooter = await screen.findByTestId('section-footer');
    expect(learnMoreBtn.textContent).toBe(LEARN_MORE);
    expect(sectionFooter.textContent).toBe(SECTION_FOOTER);
  });

  // it('should not render banner in Mobile viewport', async () => {

  //   await resizeWindow(500, 900);
  //   await render(<Banner />);

  //   const learnMoreBtn = await screen.findByTestId('learn-more-button');
  //   const bannerContainer = await screen.findByTestId('banner-container');

  //   const sectionFooter = await screen.findByTestId('section-footer');

  //   expect(learnMoreBtn.textContent).toBe(LEARN_MORE);
  //   expect(sectionFooter.textContent).toBe(SECTION_FOOTER);
  // });
});
