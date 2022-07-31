import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DarkThemeProvider } from '../shared/darkThemeContext';
import { TotalFavoriteProvider } from '../shared/favoriteContext';
import { ProductsProvider } from '../shared/productsContext';
import { TotalQuantityProvider } from '../shared/totalQuantityContext';

interface MockContexProvider {
  children: ReactNode;
}

const MockContexProvider: React.FC<MockContexProvider> = (
  props: MockContexProvider,
) => {
  return (
    <TotalFavoriteProvider>
      <ProductsProvider>
        <TotalQuantityProvider>
          <DarkThemeProvider>
            <BrowserRouter>{props.children}</BrowserRouter>
          </DarkThemeProvider>
        </TotalQuantityProvider>
      </ProductsProvider>
    </TotalFavoriteProvider>
  );
};

export default MockContexProvider;
