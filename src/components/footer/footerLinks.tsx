import { Box, Typography, Grid } from "@mui/material";
import { isMobile } from "react-device-detect";
import { Instagram, Google, Twitter, Facebook } from "@mui/icons-material";

import {
  containerStyle,
  grayColor,
  firstSection,
  secondSection,
  alignTextRight,
  alignTextLeft,
  secondSectionTitle,
} from "./footerLinks-style";

type FooterLinksProps = {};

const FooterLinks: React.FC<FooterLinksProps> = (props: FooterLinksProps) => {
  const gridLayout = (x: number) => (isMobile ? 12 : x);
  return (
    <Box sx={containerStyle}>
      <Grid container spacing={2} sx={firstSection}>
        <Grid item xs={gridLayout(3)} sx={alignTextLeft}>
          <Typography sx={grayColor}> Our Office Address</Typography>
          <Typography> 169 Florida Ave, L.A City </Typography>
        </Grid>
        <Grid item xs={gridLayout(3)} sx={alignTextLeft}>
          <Typography sx={grayColor}> Please call us</Typography>
          <Typography> (+84) 12346869669 </Typography>
        </Grid>
        <Grid
          item
          xs={gridLayout(6)}
          sx={isMobile ? alignTextLeft : alignTextRight}
        >
          <Instagram /> <Google /> <Facebook /> <Twitter />
        </Grid>
      </Grid>
      <Box sx={secondSection}>
        <Grid container sx={{}}>
          <Grid item xs={gridLayout(3)} sx={alignTextLeft}>
            <Typography sx={secondSectionTitle}> Our Stores </Typography>
            <Typography sx={grayColor}> Liverpool City</Typography>
          </Grid>
          <Grid item xs={gridLayout(3)} sx={alignTextLeft}>
            <Typography sx={secondSectionTitle}> My Account </Typography>
            <Typography sx={grayColor}> My Cart</Typography>
            <Typography sx={grayColor}> Check Out</Typography>
            <Typography sx={grayColor}> Wishlist</Typography>
            <Typography sx={grayColor}> Team & Policy</Typography>
            <Typography sx={grayColor}> Your Account</Typography>
          </Grid>
          <Grid item xs={gridLayout(3)} sx={alignTextLeft}>
            <Typography sx={secondSectionTitle}> Information </Typography>
            <Typography sx={grayColor}> Shipping & Return</Typography>
            <Typography sx={grayColor}> Gift Cards</Typography>
            <Typography sx={grayColor}> Track My Order</Typography>
            <Typography sx={grayColor}> Team & Policy</Typography>
            <Typography sx={grayColor}> FAQs</Typography>
          </Grid>
          <Grid item xs={gridLayout(3)} sx={alignTextLeft}>
            <Typography sx={secondSectionTitle}> How to Buy </Typography>
            <Typography sx={grayColor}> Making Payments</Typography>
            <Typography sx={grayColor}> Delivary Options</Typography>
            <Typography sx={grayColor}> Buyer Protection</Typography>
            <Typography sx={grayColor}> New User Guide</Typography>
            <Typography sx={grayColor}> Partner Ship</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FooterLinks;
