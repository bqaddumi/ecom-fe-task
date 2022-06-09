export const styles = {
    backgroundColor: (theme: { palette: { mode: string } }) =>
      theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    color: (theme: { palette: { mode: string } }) =>
      theme.palette.mode === "dark" ? "#fff" : "#1A2027",
  };
  