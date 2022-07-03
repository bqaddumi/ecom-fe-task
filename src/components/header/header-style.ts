export const titleStyle = {
  textDecoration: "none",
  fontWeight: "800",
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#f1f1f1" : "#1D2530",
};

export const containerStyle = {
  padding: "0 10%",
  display: "flex",
  justifyContent: "space-between",
};

export const rightSideStyle = {
  display: "flex",
  "@media only screen and (max-width: 600px)": {
      display: "none"
  }
};
export const cartLinkContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  cursor: "pointer",
};
export const cartIconsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};
export const iconStyle = {
  marginRight: "30px",
  cursor: "pointer",
};

export const balanceStyle = {
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "#666666",
};
