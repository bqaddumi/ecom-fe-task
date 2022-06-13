export const footerContainerStyle = {
  backgroundColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#282E36" : "#EBEBEB",
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#fff" : "#1A2027",
  textAlign: "center",
  paddingTop: "40px",
  paddingBottom: "45px",
  marginTop: "50px",
};

export const titleStyle = {
  fontSize: "30px",
  fontWeight: "600",
};

export const subTitleStyle = {
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "#666666",
};

export const subscribeButtonStyle = {
  marginLeft: "10px",
  padding: "13px 50px",
  color: "#fff",
  background: "#AB1D2B",
  borderRadius: "0",
  "&:hover": {
    color: "#fff",
    background: "#AB1D2B",
  },
};

export const emailInputStyle = {
  width: "50%",
  backgroundColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#282E36" : "#fff",
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#fff" : "#1A2027",
};

export const emailContainerStyles = {
  marginTop: "40px",
};
