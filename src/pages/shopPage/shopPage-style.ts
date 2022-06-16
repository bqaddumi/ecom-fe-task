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
};

export const boxMobileStyle = {
  width: "100%",
  padding: "0",
};

export const firstSectionStyle = {
  margin: "30px 10% 0px",
  height: "500px",
  background: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#37353A" : "#FFFFFF",
};

export const firstSectionMobileStyle = {
  height: "500px",
  background: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#37353A" : "#FFFFFF",
};

export const secondSectionStyle = {
  background: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#37353A" : "#FFFFFF",
};