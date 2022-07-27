import React, { useState } from 'react';
import { Link, To, useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Badge,
} from '@mui/material';
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTotalQuantity } from '../../shared/totalQuantityContext';
import { useTotalFavorite } from '../../shared/favoriteContext';
import {
  navbarLinkStyles,
  headerContainer,
  iconsContainer,
  iconStyle,
} from './navbar-style';
import {
  NAVBAR_ITEMS,
  HEADER_TITLE,
  CART_LINK,
  DARK,
  LIGHT,
} from '../../consts';
import {
  cartLinkContainerStyle,
  titleStyle,
  balanceStyle,
} from '../header/header-style';
import { useDarkTheme } from '../../shared/darkThemeContext';

const MobileNavbar: React.FC = () => {
  const {
    state: { isDark },
    dispatch,
  } = useDarkTheme();

  const {
    state: { totalQuantity },
  } = useTotalQuantity();
  const {
    state: { totalFavorite },
  } = useTotalFavorite();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = Object.values(NAVBAR_ITEMS);

  return (
    <Box>
      <Box sx={headerContainer}>
        <IconButton
          id="positioned-button"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          aria-controls={open ? 'positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="span" sx={{ mr: 2 }}>
          {HEADER_TITLE}
        </Typography>
        <Box sx={iconsContainer}>
          <Badge badgeContent={totalFavorite || '0'} color="error">
            <FavoriteBorderOutlined sx={iconStyle} />
          </Badge>
          <Badge badgeContent={totalQuantity || '0'} color="error">
            <ShoppingCartOutlined
              sx={iconStyle}
              onClick={() => navigate('/cart')}
            />
          </Badge>
        </Box>
      </Box>
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
        {navItems.map(
          (
            item: {
              link: To;
              name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            },
            index: React.Key,
          ) => {
            return (
              <Link key={index} to={item.link} style={navbarLinkStyles}>
                <MenuItem onClick={handleClose}>{item.name}</MenuItem>
              </Link>
            );
          },
        )}
        <MenuItem onClick={handleClose}>
          <Box sx={cartLinkContainerStyle} onClick={() => navigate('/cart')}>
            <Badge badgeContent={totalQuantity || '0'} color="error">
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
          onClick={() => {
            dispatch('toggle');
            setTimeout(() => handleClose(), 500);
          }}
        >
          {isDark ? LIGHT : DARK}
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MobileNavbar;
