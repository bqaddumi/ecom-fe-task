import { Box, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";

import {
  titleStyle,
  boxStyle,
  boxMobileStyle,
  firstSectionStyle,
  secondSectionStyle,
  titleContainer,
  firstSectionMobileStyle,
} from "./shopPage-style";
import { CATEGORIES } from "../../consts";
import { useEffect, useState } from "react";
import { CategoryType, ProductType } from "../../types";
import { getCategories, getProducts } from "../../axios";
type ShopPageProps = {};

const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);

  const { SMART, AUDIO, CAMERA } = CATEGORIES;
  const sectionStyle = isMobile ? firstSectionMobileStyle : firstSectionStyle;

  useEffect(() => {
    getCategories().then((res: { data: CategoryType[] }) => {
      const { data } = res;
      setCategories(data);
    });
    getProducts().then((res: { data: ProductType[] }) => {
      const { data } = res;
      setProducts(data);
    });
  }, []);

  return (
    <Box sx={isMobile ? boxMobileStyle : boxStyle}>
      <Box sx={sectionStyle}>
        <Box sx={titleContainer}>
          <Typography variant="body1" sx={titleStyle}>
            {SMART}
          </Typography>
        </Box>
      </Box>
      <Box sx={secondSectionStyle}>
        <Box sx={secondSectionStyle}>
          <Box sx={sectionStyle}>
            <Box sx={titleContainer}>
              <Typography variant="body1" sx={titleStyle}>
                {AUDIO}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={secondSectionStyle}>
          <Box sx={sectionStyle}>
            <Box sx={titleContainer}>
              <Typography variant="body1" sx={titleStyle}>
                {CAMERA}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShopPage;
