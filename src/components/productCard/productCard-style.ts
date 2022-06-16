export const containerStyle = {
  borderRight: "1px solid",
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#515151" : "#E0E0E0",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "195px",
  width: "195px",
  cursor:'pointer',
};

export const productImage = {
  width: "195px",
  height: "135px",
  marginBottom: "30px",
};

export const nameStyle = {
  fontWeight: "400",
};

export const priceStyle = {
  fontWeight: "500",
  color: "#AE1B26",
};
