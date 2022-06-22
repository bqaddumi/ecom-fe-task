import { isMobile } from "react-device-detect";

export const container = {
  display: "flex",
  width: "465px",
  marginBottom: "20px",
  marginLeft: "20px",
  cursor: 'pointer'
};

export const nameStyle = {
  fontWeight: "500",
};

export const cardContentStyle = {
  borderRight: isMobile ? "0" : "1px solid",
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#515151" : "#E0E0E0",
  display: "flex",
  flexDirection: "column",
};
