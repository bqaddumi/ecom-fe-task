import { useNavigate } from "react-router-dom";
import { isBrowser } from "react-device-detect";

import { Button, Typography, Box, Badge } from "@mui/material";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  Autorenew,
} from "@mui/icons-material";

import {
  titleStyle,
  containerStyle,
  cartLinkContainerStyle,
  cartIconsContainerStyle,
  iconStyle,
  balanceStyle,
  rightSideStyle,
} from "./header-style";
import { HEADER_TITLE, DARK, LIGHT, CART_LINK } from "../../consts";
import { useDarkTheme } from "../../shared/darkThemeContext";
import { useTotalQuantity } from "../../shared/totalQuantityContext";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const navigate = useNavigate();
  const {
    state: { isDark },
    dispatch,
  } = useDarkTheme();

  const {
    state: { totalQuantity },
  } = useTotalQuantity();

  return (
    <Box sx={containerStyle}>
      <Typography variant="h4" component="div" sx={titleStyle}>
        {HEADER_TITLE}
      </Typography>
      {isBrowser && (
        <Box sx={rightSideStyle}>
          <Box sx={cartIconsContainerStyle}>
            <Button onClick={() => dispatch("toggle")}>
              {isDark ? LIGHT : DARK}
            </Button>
            <Box sx={iconStyle}>
              <Badge badgeContent={"0"} color="error">
                <Autorenew />
              </Badge>
            </Box>
            <Box sx={iconStyle}>
              <Badge badgeContent={"0"} color="error">
                <FavoriteBorderOutlined />
              </Badge>
            </Box>
            <Box onClick={() => navigate("/")} sx={iconStyle}>
              <Badge badgeContent={totalQuantity} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </Box>
          </Box>
          <Box sx={cartLinkContainerStyle} onClick={() => navigate("/")}>
            <Typography component="div" sx={titleStyle}>
              {CART_LINK}
            </Typography>
            <Typography component="div" sx={balanceStyle}>
              {"$0.00"}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
