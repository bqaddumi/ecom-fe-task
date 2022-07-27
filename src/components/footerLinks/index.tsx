import { Box, Typography } from '@mui/material';
import { Instagram, Google, Twitter, Facebook } from '@mui/icons-material';
import {
  FOOTER_LINKS_SECOND_SECTION,
  FOOTER_LINKS_FIRST_SECTION,
} from '../../consts';

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
        {FOOTER_LINKS_FIRST_SECTION.map(
          (item: { NAME: string; VALUE: string }) => (
            <Box key={item.NAME} sx={address}>
              <Typography sx={grayColor}> {item.NAME}</Typography>
              <Typography> {item.VALUE} </Typography>
            </Box>
          ),
        )}
        <Box sx={iconsContainer}>
          <Instagram /> <Google sx={icon} /> <Facebook sx={icon} />{' '}
          <Twitter sx={icon} />
        </Box>
      </Box>
      <Box sx={secondSection}>
        {FOOTER_LINKS_SECOND_SECTION.map(
          (item: { NAME: string; LINKS: string[] }) => {
            const { NAME, LINKS } = item;
            return (
              <Box key={item.NAME} sx={alignTextLeft}>
                <Typography sx={secondSectionTitle}> {NAME} </Typography>
                {LINKS.map((link: string) => (
                  <Typography key={link} sx={grayColor}>
                    {link}
                  </Typography>
                ))}
              </Box>
            );
          },
        )}
      </Box>
    </Box>
  );
};

export default FooterLinks;
