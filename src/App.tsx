import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./styles";
import { CartType, ProductType } from "./types";
import Main from "./components/main/main";

import { useDarkTheme } from "./shared/darkThemeContext";
import { useEffect } from "react";
import { getCart, getProducts } from "./axios";
import { useTotalQuantity } from "./shared/totalQuantityContext";
import { useProducts } from "./shared/productsContext";

function App() {
  const {
    state: { isDark },
  } = useDarkTheme();

  const { dispatch } = useTotalQuantity();
  const products = useProducts();

  useEffect(() => {
    getCart().then((res: { data: CartType }) => {
      const { totalQuantity } = res.data;
      dispatch({ type: "set", totalQuantity });
    });
    getProducts().then((res: { data: ProductType[] }) => {
      const { data } = res;
      products.dispatch({ type: "set", products: data });
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
