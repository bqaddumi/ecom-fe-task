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
  return (
    <Box sx={boxContainerStyle}>
      <AppBar position="static" sx={navBarStyles}>
        <Toolbar>
          <Box sx={mobileNavContainer}>
            <MobileNavbar />
          </Box>
          <Box sx={navItemsContainer}>
            {NAVBAR_ITEMS.map((item: any, index: number) => {
              return (
                <Typography
                  key={item.name}
                  variant="inherit"
                  component="div"
                  sx={{ mr: 2 }}
                >
                  <Link
                    data-testid={`navItem${index}`}
                    to={item.link}
                    style={navbarLinkStyles}
                  >
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
