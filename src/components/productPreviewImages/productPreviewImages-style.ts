export const imageStyle = {
  position: "relative",
  width: "130px",
  border: "1px solid",
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#515151" : "#E0E0E0",
  marginBottom: "5px",
  padding: "3px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#515151" : "#E0E0E0",
  },
};
