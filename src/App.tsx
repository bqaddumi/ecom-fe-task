import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./styles";
import Main from "./components/main/main";
import { useDarkTheme } from "./shared/darkThemeContext";
import { useEffect } from "react";
import { getCart, getFavoriteProducts, getProducts } from "./axios";
import { useTotalQuantity } from "./shared/totalQuantityContext";
import { useProducts } from "./shared/productsContext";
import { useTotalFavorite } from "./shared/favoriteContext";

function App() {
  const {
    state: { isDark },
  } = useDarkTheme();

  const totalQuantityContext = useTotalQuantity();
  const productsContext = useProducts();
  const totalFavoriteContext = useTotalFavorite();

  useEffect(() => {
    const fetchData = async () => {
      const cart = await getCart();
      const products = await getProducts();
      const favProducts = await getFavoriteProducts();

      totalQuantityContext.dispatch({
        type: "set",
        totalQuantity: cart.data?.totalQuantity,
      });
      productsContext.dispatch({ type: "set", products: products.data });
      totalFavoriteContext.dispatch({
        type: "set",
        totalFavorite: favProducts.data?.length,
      });
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
