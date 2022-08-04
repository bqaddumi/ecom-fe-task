import { render, screen } from '@testing-library/react';
import {
  FOOTER_LINKS_SECOND_SECTION,
  FOOTER_LINKS_FIRST_SECTION,
} from '../../consts';
import FooterLinks from './index';

describe('footerLinks component', () => {
  it('should render first section links correctly', async () => {
    render(<FooterLinks />);
    for (const item of FOOTER_LINKS_FIRST_SECTION) {
      const { NAME, VALUE } = item;
      const nameEl = await screen.findByText(NAME);
      const valueEl = await screen.findByText(VALUE);
      expect(nameEl).toBeTruthy();
      expect(valueEl).toBeTruthy();
    }
  });

  it('should render second section links correctly', async () => {
    render(<FooterLinks />);
    for (const item of FOOTER_LINKS_SECOND_SECTION) {
      const { NAME, LINKS } = item;
      const name = await screen.findByText(NAME);
      expect(name).toBeTruthy();
      for (const link of LINKS) {
        const linkEl = await screen.findAllByText(link);
        expect(linkEl[0]).toBeTruthy();
      }
    }
  });
});
