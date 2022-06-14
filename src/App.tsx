import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./styles";
import { CartType } from "./types";
import Main from "./components/main/main";

import { useDarkTheme } from "./shared/darkThemeContext";
import { useEffect } from "react";
import { getCart } from "./axios";
import { useTotalQuantity } from "./shared/totalQuantityContext";

function App() {
  const {
    state: { isDark },
  } = useDarkTheme();

  const { dispatch } = useTotalQuantity();

  useEffect(() => {
    getCart().then((res: { data: CartType }) => {
      const { totalQuantity } = res.data;
      dispatch({ type: "set", totalQuantity });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
