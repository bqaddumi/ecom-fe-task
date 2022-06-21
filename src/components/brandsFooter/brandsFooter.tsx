import React from "react";
import { Box, CardMedia } from "@mui/material";

import { BRANDS_IMAGES } from "../../consts";
import { container, imageStyle } from "./brandsFooter-style";

const BrandsFooter: React.FC = () => {
  return (
    <Box sx={container}>
      {BRANDS_IMAGES.map((imgLink: string) => {
        return (
          <CardMedia
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

export default BrandsFooter;
