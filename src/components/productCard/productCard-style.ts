export const containerStyle = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "195px",
  width: "195px",
  cursor: "pointer",
};

export const productImage = {
  width: "195px",
  height: "135px",
  marginBottom: "30px",
  borderRight: "1px solid",
  padding: "0px 20px",
  objectFit: "contain",
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#515151" : "#E0E0E0",
};

export const nameStyle = {
  fontWeight: "500",
};

export const priceStyle = {
  fontWeight: "500",
  color: "#AE1B26",
};
