import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./styles";
import Main from "./components/main";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Main isDark={isDark} onToggleDarkClicked={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
