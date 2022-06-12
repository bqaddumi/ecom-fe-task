import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { isMobile } from "react-device-detect";
import {
  navBarStyles,
  navbarLinkStyles,
  boxContainerStyle,
} from "./navbar-style";
import { NAVBAR_ITEMS, HEADER_TITLE } from "../../consts";

import MobileNavbar from "./mobileNavbar";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <Box sx={boxContainerStyle}>
      <AppBar position="static" sx={navBarStyles}>
        <Toolbar>
          {isMobile ? (
            <MobileNavbar />
          ) : (
            <>
              <Typography variant="inherit" component="div" sx={{ mr: 2 }}>
                <Link to="/home" style={navbarLinkStyles}>
                  {NAVBAR_ITEMS.HOME}
                </Link>
              </Typography>
              <Typography variant="inherit" component="div" sx={{ mr: 2 }}>
                <Link to="/products" style={navbarLinkStyles}>
                  {NAVBAR_ITEMS.SHOP}
                </Link>
              </Typography>
              <Typography variant="inherit" component="div" sx={{ mr: 2 }}>
                <Link to="/cart" style={navbarLinkStyles}>
                  {NAVBAR_ITEMS.PAGES}
                </Link>
              </Typography>
              <Typography variant="inherit" component="div" sx={{ mr: 2 }}>
                <Link to="/cart" style={navbarLinkStyles}>
                  {NAVBAR_ITEMS.LOOKBOOK}
                </Link>
              </Typography>
              <Typography variant="inherit" component="div" sx={{ mr: 2 }}>
                <Link to="/cart" style={navbarLinkStyles}>
                  {NAVBAR_ITEMS.BRANDS}
                </Link>
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
