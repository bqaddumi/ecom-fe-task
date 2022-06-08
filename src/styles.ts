import { createTheme } from "@mui/material";

export const styles = {
  backgroundColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#fff" : "#1A2027",
};

export const navBarStyles = {
  backgroundColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#fff" : "#1A2027",
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
