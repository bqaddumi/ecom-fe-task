export const tableStyle = {
  minWidth: 650,
  borderLeft: "none",
  borderRight: "none",
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#515151" : "#E0E0E0",
};

export const deleteButtonStyle = {
  cursor: "pointer",
};

export const quantityContainerStyle = {
  display: "flex",
  justifyContent: "center",
  border: "1px solid #f1f1f1",
  padding: "15px 0px",
};

export const quantitytitleStyle = {
  marginRight: "20px",
  marginLeft: "20px",
};

export const quantityButtonStyle = {
  cursor: "pointer",
};
