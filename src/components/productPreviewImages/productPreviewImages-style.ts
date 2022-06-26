import { isMobile } from "react-device-detect";

export const imageStyle = {
  position: "relative",
  width: "130px",
  border: "1px solid",
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#515151" : "#E0E0E0",
  marginBottom: "5px",
  padding: "3px",
  cursor: "pointer",
};

export const containerDesktop = {
  display: "flex",
  flexDirection: isMobile ? "row" : "column",
  flexWrap: "wrap",
};

export const selectedImage = {
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#fff" : "#000",
};
