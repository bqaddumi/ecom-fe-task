import { ThemeProvider, createTheme } from "@mui/material/styles";

import Main from "./components/main";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
