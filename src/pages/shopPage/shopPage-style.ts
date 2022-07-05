export const titleStyle = {
  margin: "0",
  fontWeight: "600",
  marginBottom: "10px",
  fontSize: "20px",
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#f1f1f1" : "#37353A",
};

export const titleContainer = {
  paddingTop: "20px",
  marginLeft: "20px",
  marginRight: "20px",
  borderBottom: "1px solid",
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#515151" : "#E0E0E0",
};

export const boxStyle = {
  width: "100%",
  background: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#1A2027" : "#F0F0F0",
  "@media only screen and (max-width: 600px)": {
    width: "100%",
    padding: "0",
  },
};

export const secondSectionStyle = {
  background: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#37353A" : "#FFFFFF",
};

export const productsContainer = {
  width: "calc(100% - 40px)",
  minHeight: "400px",
  overflowX: "auto",
  margin: "20px 20px",
  display: "flex",
  flexDirection: "row",
  marginTop: "70px",
  "@media only screen and (max-width: 600px)": {
    flexDirection: "column",
  },
};

export const pageButtonContainer = {
  display: "flex",
  justifyContent: "center",
};

export const categoryImage = {
  height: "450px",
  width: "330px",
  marginTop: "30px",
  "@media only screen and (max-width: 600px)": {
    height: "auto",
    width: "100%",
  },
};

export const thirdSectionContainer = {
  display: "none",
  "@media only screen and (max-width: 600px)": {
    marginTop: "40px",
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
  },
};

export const productsChunkContainer = {
  "@media only screen and (max-width: 600px)": {
    display: "none",
  },
};

export const thirdSectionDesktop = {
  marginTop: "40px",
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
};

export const sectionStyle = {
  margin: "30px 10% 0px",
  background: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#37353A" : "#FFFFFF",
  "@media only screen and (max-width: 600px)": {
    margin: "0",
  },
};

export const gridContainer = {
  display: "flex",
  flexWrap: "wrap",
};
export const gridSection = {
  width: "66%",
  "@media only screen and (max-width: 600px)": {
    width: "100%",
  },
};
export const gridSectionImage = {
  width: "33%",
  "@media only screen and (max-width: 600px)": {
    width: "100%",
  },
};
