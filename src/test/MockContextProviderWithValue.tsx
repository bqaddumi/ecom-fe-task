import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DarkThemeProvider } from '../shared/darkThemeContext';
import { TotalFavoriteContext } from '../shared/favoriteContext';
import { ProductsProvider } from '../shared/productsContext';
import { TotalQuantityContext } from '../shared/totalQuantityContext';

interface MockContexProviderWithValueProps {
  children: ReactNode;
  value: {
    totalQuantity: number;
    totalFavorite: number;
  };
}

const MockContexProviderWithValue: React.FC<
  MockContexProviderWithValueProps
> = (props: MockContexProviderWithValueProps) => {
  const {
    value: { totalFavorite, totalQuantity },
  } = props;

  return (
    <TotalFavoriteContext.Provider
      value={{ state: { totalFavorite }, dispatch: jest.fn() }}
    >
      <ProductsProvider>
        <TotalQuantityContext.Provider
          value={{ state: { totalQuantity }, dispatch: jest.fn() }}
        >
          <DarkThemeProvider>
            <BrowserRouter>{props.children}</BrowserRouter>
          </DarkThemeProvider>
        </TotalQuantityContext.Provider>
      </ProductsProvider>
    </TotalFavoriteContext.Provider>
  );
};

export default MockContexProviderWithValue;
