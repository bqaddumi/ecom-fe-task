import { Link, useNavigate } from 'react-router-dom';
import { MenuItem, Menu, Box, Badge, Typography } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useTotalQuantity } from '../../shared/totalQuantityContext';
import { useDarkTheme } from '../../shared/darkThemeContext';
import { NavItemType } from '../../types';
import {
  navbarLinkStyles,
  cartLinkContainerStyle,
  titleStyle,
  balanceStyle,
} from './mobileNavbar-style';

import { CART_LINK, DARK, LIGHT, NAVBAR_ITEMS } from '../../consts';

interface MobileMenuProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  open: boolean;
  anchorEl: HTMLElement | null;
}

const MobileMenu: React.FC<MobileMenuProps> = (props: MobileMenuProps) => {
  const { open, handleClose, anchorEl } = props;
  const navigate = useNavigate();

  const {
    state: { isDark },
    dispatch,
  } = useDarkTheme();
  const {
    state: { totalQuantity },
  } = useTotalQuantity();

  return (
    <Menu
      id="positioned-menu"
      aria-labelledby="positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {NAVBAR_ITEMS.map((item: NavItemType, index: number) => {
        return (
          <Link
            data-testid={`menuItem${index}`}
            key={index}
            to={item.link}
            style={navbarLinkStyles}
          >
            <MenuItem onClick={handleClose}>{item.name}</MenuItem>
          </Link>
        );
      })}
      <MenuItem onClick={handleClose}>
        <Box sx={cartLinkContainerStyle} onClick={() => navigate('/cart')}>
          <Badge
            data-testid="mobileMenuTotalQuantityBadge"
            badgeContent={totalQuantity || '0'}
            color="error"
          >
            <ShoppingCartOutlined />
          </Badge>
          <Typography component="span" sx={titleStyle}>
            {CART_LINK}
          </Typography>
          <Typography component="div" sx={balanceStyle}>
            {'$0.00'}
          </Typography>
        </Box>
      </MenuItem>
      <MenuItem
        data-testid="themeToggleButton"
        onClick={() => {
          dispatch('toggle');
          setTimeout(() => handleClose(), 500);
        }}
      >
        {isDark ? LIGHT : DARK}
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;
