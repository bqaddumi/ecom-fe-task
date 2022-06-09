import { ListItem, Button, Typography } from "@mui/material";
import { titleStyle, containerStyle } from "./header-style";
import { HEADER_TITLE, DARK, LIGHT } from "../../consts";

type HeaderProps = {
  isDark: boolean;
  onToggleDarkClicked: () => void;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { isDark, onToggleDarkClicked } = props;
  return (
    <ListItem sx={containerStyle}>
      <Typography variant="h3" component="div" sx={titleStyle}>
        {HEADER_TITLE}
      </Typography>
      <Button onClick={onToggleDarkClicked}>{isDark ? LIGHT : DARK}</Button>
    </ListItem>
  );
};

export default Header;
