import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./styles";
import Main from "./components/main/main";

import { useDarkTheme } from "./shared/context";

function App() {
  const {
    state: { isDark },
  } = useDarkTheme();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
