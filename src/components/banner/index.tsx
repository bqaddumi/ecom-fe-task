import React from 'react';
import { Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { container, footer, button } from './banner-style';
import { SECTION_FOOTER, LEARN_MORE } from '../../consts';

const Banner: React.FC = () => {
  return (
    <Box data-testid="banner-container" sx={container}>
      <Box data-testid="section-footer" sx={footer}>
        {SECTION_FOOTER}
      </Box>
      <Box data-testid="learn-more-button" sx={button}>
        {LEARN_MORE}
        <ArrowRightAltIcon />
      </Box>
    </Box>
  );
};

export default Banner;
