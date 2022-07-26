import { Box, Typography } from '@mui/material';
import { Instagram, Google, Twitter, Facebook } from '@mui/icons-material';

import {
  containerStyle,
  grayColor,
  firstSection,
  secondSection,
  icon,
  address,
  alignTextLeft,
  secondSectionTitle,
  iconsContainer,
} from './footerLinks-style';

const FooterLinks: React.FC = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={firstSection}>
        <Box sx={address}>
          <Typography sx={grayColor}> Our Office Address</Typography>
          <Typography> 169 Florida Ave, L.A City </Typography>
        </Box>
        <Box sx={address}>
          <Typography sx={grayColor}> Please call us</Typography>
          <Typography> (+84) 12346869669 </Typography>
        </Box>
        <Box sx={iconsContainer}>
          <Instagram /> <Google sx={icon} /> <Facebook sx={icon} />{' '}
          <Twitter sx={icon} />
        </Box>
      </Box>
      <Box sx={secondSection}>
        <Box sx={alignTextLeft}>
          <Typography sx={secondSectionTitle}> Our Stores </Typography>
          <Typography variant="body1" sx={grayColor}>
            {' '}
            501 Floor, Nguyen Ngoc Vu, Cau Giay, Ha Noi{' '}
          </Typography>
          <Typography variant="body1" sx={grayColor}>
            {' '}
            741 - 11A Sandiago, L.A City, USA{' '}
          </Typography>
          <Typography variant="body1" sx={grayColor}>
            {' '}
            5thFloor, 169 Green Lakes, WestBrown, Liverpool City{' '}
          </Typography>
          <Typography variant="body1" sx={grayColor}>
            {' '}
            628 Brooklyn Street, Fulham District, Wales{' '}
          </Typography>
          <Typography variant="body1" sx={grayColor}>
            {' '}
            10001 Street, WinLow District, Mexico{' '}
          </Typography>
          <Typography variant="body1" sx={grayColor}>
            {' '}
            1st Floor BrickHouse, 250 Wall Street, C.A City UK{' '}
          </Typography>
        </Box>
        <Box sx={alignTextLeft}>
          <Typography sx={secondSectionTitle}> My Account </Typography>
          <Typography sx={grayColor}> My Cart</Typography>
          <Typography sx={grayColor}> Check Out</Typography>
          <Typography sx={grayColor}> Wishlist</Typography>
          <Typography sx={grayColor}> Team & Policy</Typography>
          <Typography sx={grayColor}> Your Account</Typography>
        </Box>
        <Box sx={alignTextLeft}>
          <Typography sx={secondSectionTitle}> Information </Typography>
          <Typography sx={grayColor}> Shipping & Return</Typography>
          <Typography sx={grayColor}> Gift Cards</Typography>
          <Typography sx={grayColor}> Track My Order</Typography>
          <Typography sx={grayColor}> Team & Policy</Typography>
          <Typography sx={grayColor}> FAQs</Typography>
        </Box>
        <Box sx={alignTextLeft}>
          <Typography sx={secondSectionTitle}> How to Buy </Typography>
          <Typography sx={grayColor}> Making Payments</Typography>
          <Typography sx={grayColor}> Delivary Options</Typography>
          <Typography sx={grayColor}> Buyer Protection</Typography>
          <Typography sx={grayColor}> New User Guide</Typography>
          <Typography sx={grayColor}> Partner Ship</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterLinks;
