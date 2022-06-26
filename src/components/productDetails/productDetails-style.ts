import { isMobile } from "react-device-detect";

export const detailsContainer = {
  marginLeft: isMobile ? "0" : "auto",
  marginRight: isMobile ? "0" : "100px",
  width: "100%",
};

export const quantityContainerStyle = {
  display: "flex",
  justifyContent: "center",
  border: "1px solid #f1f1f1",
  padding: "15px 0px",
  width: "100%",
};

export const quantitytitleStyle = {
  marginRight: "20px",
  marginLeft: "20px",
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#fff" : "#000",
  fontWeight: "500",
};

export const quantityButtonStyle = {
  cursor: "pointer",
  color: "#b5b3b3",
};

export const productQuantityAndFav = {
  display: "flex",
  justifyContent: "center",
  padding: "15px 0px",
  width: "100%",
};

export const iconsContainer = {
  display: "flex",
  justifyContent: "center",
  border: "1px solid #f1f1f1",
  padding: "15px",
  color: "#707070",
  cursor: "pointer",
  marginLeft: "10px",
};

//b5b3b3

export const priceStyle = {
  fontWeight: "500",
  color: "#AE1B26",
  marginBottom: "10px",
};

export const addToCartButtonStyle = {
  width: "100%",
  padding: "13px 21px",
  color: "#fff",
  background: "#000",
  marginTop: "5px",
  borderRadius: "0",
  marginBottom: "20px",
  "&:hover": {
    color: "#fff",
    background: "#343536",
  },
};

export const pathNameStyle = {
  fontSize: "13px",
  color: "#b5b3b3",
};
export const productNameStyle = {
  fontWieght: "800",
  margin: "10px 0 20px 0",
};

export const descStyle = {
  marginBottom: "10px",
};
