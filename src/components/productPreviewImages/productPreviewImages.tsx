import React from "react";
import { Box, CardMedia } from "@mui/material";
import { imageStyle } from "./productPreviewImages-style";

type ProductPreviewImagesProps = {
  images: string[];
  onImageClicked: (image: string) => void;
};

const ProductPreviewImages: React.FC<ProductPreviewImagesProps> = (
  props: ProductPreviewImagesProps
) => {
  const { images, onImageClicked } = props;
  return (
    <Box>
      {images.slice(0, 4).map((image: string, index: number) => {
        return (
          <CardMedia
            onClick={() => onImageClicked(image)}
            key={index}
            component="img"
            sx={imageStyle}
            image={image}
            alt={`Preview image ${index}`}
          />
        );
      })}
    </Box>
  );
};

export default ProductPreviewImages;
