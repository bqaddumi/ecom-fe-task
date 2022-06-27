import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import {
  navBarStyles,
  navbarLinkStyles,
  boxContainerStyle,
} from "./navbar-style";
import { NAVBAR_ITEMS } from "../../consts";

import MobileNavbar from "./mobileNavbar";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const navItems = Object.values(NAVBAR_ITEMS);
  return (
    <Box sx={boxContainerStyle}>
      <AppBar position="static" sx={navBarStyles}>
        <Toolbar>
          {isMobile ? (
            <MobileNavbar />
          ) : (
            <>
              {navItems.map((item) => {
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
