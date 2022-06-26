import React, { useState } from "react";
import { Box, CardMedia } from "@mui/material";
import {
  imageStyle,
  containerDesktop,
  selectedImage,
} from "./productPreviewImages-style";

type ProductPreviewImagesProps = {
  images: string[];
  onImageClicked: (image: string) => void;
};

const ProductPreviewImages: React.FC<ProductPreviewImagesProps> = (
  props: ProductPreviewImagesProps
) => {
  const [selectedImg, setSelectedImg] = useState<number>(0);

  const { images, onImageClicked } = props;

  const onCardMediaClicked = (image: string, index: number) => {
    setSelectedImg(index);
    onImageClicked(image);
  };

  return (
    <Box sx={containerDesktop}>
      {images.slice(0, 4).map((image: string, index: number) => {
        return (
          <CardMedia
            onClick={() => onCardMediaClicked(image, index)}
            key={index}
            component="img"
            sx={{
              ...imageStyle,
              borderColor:
                selectedImg === index
                  ? selectedImage.borderColor
                  : imageStyle.borderColor,
            }}
            image={image}
            alt={`Preview image ${index}`}
          />
        );
      })}
    </Box>
  );
};

export default ProductPreviewImages;
