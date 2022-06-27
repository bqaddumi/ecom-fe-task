import { isMobile } from "react-device-detect";

export const container = {
  // background: "#cccbd6",
  width: isMobile ? "calc(100% - 40px)" : "100%",

  margin: isMobile ? "30px 20px" : "30px 0% 0 10%",
};

export const previewContainer = {
  display: "flex",
  width: "100%",

  flexDirection: isMobile ? "column" : "row",
  // justifyContent: "space-between",
};

export const toggleProductscontainer = {
  marginLeft: "auto",
  width: isMobile ? "100%" : "50px",
  display: "flex",
  flexDirection: isMobile ? "row" : "column",
  justifyContent: isMobile ? "space-between" : "center",
  marginRight: "50px",
};

export const chevronContainer = {
  color: "#676767",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  width: "35px",
  height: "35px",
  marginBottom: "10px",
  boxShadow: "6px 6px 10px #E7E7E7",
  cursor: "pointer",
};

export const imageStyle = {
  width: isMobile ? "100%" : "500px",
  margin: isMobile ? "0" : "20px 20px",
};
