import { Box, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";

import {
  titleStyle,
  boxStyle,
  boxMobileStyle,
  firstSectionStyle,
  secondSectionStyle,
  titleContainer,
} from "./shopPage-style";
import { CATEGORIES } from "../../consts";
type ShopPageProps = {};

const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  const { SMART, AUDIO, CAMERA } = CATEGORIES;
  return (
    <Box sx={isMobile ? boxMobileStyle : boxStyle}>
      <Box sx={firstSectionStyle}>
        <Box sx={titleContainer}>
          <Typography variant="body1" sx={titleStyle}>
            {SMART}
          </Typography>
        </Box>
      </Box>
      <Box sx={secondSectionStyle}>
        <Box sx={secondSectionStyle}>
          <Box sx={firstSectionStyle}>
            <Box sx={titleContainer}>
              <Typography variant="body1" sx={titleStyle}>
                {AUDIO}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={secondSectionStyle}>
          <Box sx={firstSectionStyle}>
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
