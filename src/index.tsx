import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import './index.css';
import { DarkThemeProvider } from './shared/darkThemeContext';
import { TotalFavoriteProvider } from './shared/favoriteContext';
import { ProductsProvider } from './shared/productsContext';
import { TotalQuantityProvider } from './shared/totalQuantityContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <CookiesProvider>
    <TotalFavoriteProvider>
      <ProductsProvider>
        <TotalQuantityProvider>
          <DarkThemeProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </DarkThemeProvider>
        </TotalQuantityProvider>
      </ProductsProvider>
    </TotalFavoriteProvider>
  </CookiesProvider>,
);
