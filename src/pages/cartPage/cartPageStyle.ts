export const titleStyle = {
  fontWeight: "500",
  marginTop: "30px",
  marginBottom: "30px",
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#f1f1f1" : "#37353A",
};

export const boxStyle = {
  width: "100%",
  paddingLeft: "10%",
  paddingRight: "10%",
};

export const summaryStyle = {
  padding: "17px",
  backgroundColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#f1f1f1" : "#f5f5f5",
};
