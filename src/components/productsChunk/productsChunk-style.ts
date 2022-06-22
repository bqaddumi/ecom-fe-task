import { isMobile } from "react-device-detect";

export const productsContainer = {
  width: "calc(100% - 40px)",
  minHeight: "400px",
  margin: "20px 20px",
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  marginTop: "70px",
  flexWrap: "wrap",
};

export const pageButtonContainer = {
  display: "flex",
  justifyContent: "center",
};
