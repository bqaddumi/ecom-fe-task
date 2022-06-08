import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { isMobile } from "react-device-detect";
// import useNavbarStyles from "../styles/navbar-styles";
import { NAVBAR_ITEMS, HEADER_TITLE } from "../consts";
import { Link } from "react-router-dom";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ mr: 2 }}>
                {HEADER_TITLE}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="inherit" component="div" sx={{ mr: 2 }}>
                <Link to="/home">{NAVBAR_ITEMS.HOME}</Link>
              </Typography>
              <Typography variant="inherit" component="div" sx={{ mr: 2 }}>
                <Link to="/products">{NAVBAR_ITEMS.SHOP}</Link>
              </Typography>
              <Typography variant="inherit" component="div" sx={{ mr: 2 }}>
                {NAVBAR_ITEMS.PAGES}
              </Typography>
              <Typography variant="inherit" component="div" sx={{ mr: 2 }}>
                {NAVBAR_ITEMS.LOOKBOOK}
              </Typography>
              <Typography variant="inherit" component="div" sx={{ mr: 2 }}>
                {NAVBAR_ITEMS.BRANDS}
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
