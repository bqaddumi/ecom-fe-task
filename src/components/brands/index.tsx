import React from 'react';
import { Box, CardMedia } from '@mui/material';

import { BRANDS_IMAGES } from '../../consts';
import { container, imageStyle } from './brands-style';

const Brands: React.FC = () => {
  return (
    <Box sx={container}>
      {BRANDS_IMAGES.map((imgLink: string, index: number) => {
        return (
          <CardMedia
            data-testid={`brand${index}`}
            key={index}
            component="img"
            sx={imageStyle}
            image={imgLink}
            alt={imgLink}
          />
        );
      })}
    </Box>
  );
};

export default Brands;
