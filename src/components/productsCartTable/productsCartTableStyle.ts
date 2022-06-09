export const tableStyle = {
  minWidth: 650,
  borderLeft: "none",
  borderRight: "none",
  borderTop: "1px solid red",
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#515151" : "#E0E0E0",
};

export const deleteButtonStyle = {
  cursor: "pointer",
  
};
