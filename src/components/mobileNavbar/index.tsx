import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Typography, Badge } from '@mui/material';
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './mobileMenu';
import { useTotalQuantity } from '../../shared/totalQuantityContext';
import { useTotalFavorite } from '../../shared/favoriteContext';

import {
  headerContainer,
  iconsContainer,
  iconStyle,
} from './mobileNavbar-style';
import { HEADER_TITLE } from '../../consts';

const MobileNavbar: React.FC = () => {
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
      <MobileMenu
        handleClick={handleClick}
        handleClose={handleClose}
        open={open}
        anchorEl={anchorEl}
      />
    </Box>
  );
};

export default MobileNavbar;
