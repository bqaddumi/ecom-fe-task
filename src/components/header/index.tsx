import { Button, Typography, Box } from '@mui/material';
import Icons from './icons';
import CartLink from './cartLink';
import {
  titleStyle,
  containerStyle,
  cartIconsContainerStyle,
  rightSideStyle,
} from './header-style';
import { HEADER_TITLE, DARK, LIGHT } from '../../consts';
import { useDarkTheme } from '../../shared/darkThemeContext';

const Header: React.FC = () => {
  const {
    state: { isDark },
    dispatch,
  } = useDarkTheme();

  return (
    <Box sx={containerStyle}>
      <Typography variant="h4" component="div" sx={titleStyle}>
        {HEADER_TITLE}
      </Typography>
      <Box sx={rightSideStyle}>
        <Box sx={cartIconsContainerStyle}>
          <Button onClick={() => dispatch('toggle')}>
            {isDark ? LIGHT : DARK}
          </Button>
          <Icons />
        </Box>
        <CartLink />
      </Box>
    </Box>
  );
};

export default Header;
