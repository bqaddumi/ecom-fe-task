import { useNavigate } from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";

import { Button, Typography, Box } from "@mui/material";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  KeyboardReturnOutlined,
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

type HeaderProps = {
  isDark: boolean;
  onToggleDarkClicked: () => void;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const navigate = useNavigate();
  const { isDark, onToggleDarkClicked } = props;
  return (
    <Box sx={containerStyle}>
      <Typography variant="h4" component="div" sx={titleStyle}>
        {HEADER_TITLE}
      </Typography>
      {isBrowser && (
        <Box sx={rightSideStyle}>
          <Box sx={cartIconsContainerStyle}>
            <Button onClick={onToggleDarkClicked}>
              {isDark ? LIGHT : DARK}
            </Button>
            <KeyboardReturnOutlined sx={iconStyle} />
            <FavoriteBorderOutlined sx={iconStyle} />
            <ShoppingCartOutlined sx={iconStyle} />
          </Box>
          <Box sx={cartLinkContainerStyle} onClick={() => navigate("/cart")}>
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
