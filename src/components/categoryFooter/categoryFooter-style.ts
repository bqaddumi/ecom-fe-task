export const container = {
  height: "50px",
  background: "#1C252E",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#DADFE2",
  "@media only screen and (max-width: 600px)": {
    display: "none",
  },
};

export const footer = {
  color: "#DADFE2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "75%",
};

export const button = {
  cursor: "pointer",
  height: "100%",
  width: "15%",
  color: "#DADFE2",
  fontWight: "200",
  background: "#AB1D2B",
  display: "flex",
  alignItems: "center",
  paddingLeft: "70px",
  clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
};
