import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import {
  navBarStyles,
  navbarLinkStyles,
  boxContainerStyle,
  navItemsContainer,
  mobileNavContainer,
} from './navbar-style';
import { NAVBAR_ITEMS } from '../../consts';
import MobileNavbar from '../mobileNavbar';

const Navbar: React.FC = () => {
  const navItems = Object.values(NAVBAR_ITEMS);
  return (
    <Box sx={boxContainerStyle}>
      <AppBar position="static" sx={navBarStyles}>
        <Toolbar>
          <Box sx={mobileNavContainer}>
            <MobileNavbar />
          </Box>
          <Box sx={navItemsContainer}>
            {navItems.map((item: any) => {
              return (
                <Typography
                  key={item.name}
                  variant="inherit"
                  component="div"
                  sx={{ mr: 2 }}
                >
                  <Link to={item.link} style={navbarLinkStyles}>
                    {item.name}
                  </Link>
                </Typography>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
