import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DarkThemeContext } from '../shared/darkThemeContext';
import { TotalFavoriteContext } from '../shared/favoriteContext';
import { ProductsProvider } from '../shared/productsContext';
import { TotalQuantityContext } from '../shared/totalQuantityContext';

interface MockContexProviderWithValueProps {
  children: ReactNode;
  value: {
    totalQuantity?: number;
    totalFavorite?: number;
    isDark?: boolean;
  };
}

const MockContexProviderWithValue: React.FC<
  MockContexProviderWithValueProps
> = (props: MockContexProviderWithValueProps) => {
  const {
    value: { totalFavorite = 0, totalQuantity = 0, isDark = true },
  } = props;

  return (
    <TotalFavoriteContext.Provider
      value={{ state: { totalFavorite }, dispatch: jest.fn() }}
    >
      <ProductsProvider>
        <TotalQuantityContext.Provider
          value={{ state: { totalQuantity }, dispatch: jest.fn() }}
        >
          <DarkThemeContext.Provider
            value={{ state: { isDark }, dispatch: jest.fn() }}
          >
            <BrowserRouter>{props.children}</BrowserRouter>
          </DarkThemeContext.Provider>
        </TotalQuantityContext.Provider>
      </ProductsProvider>
    </TotalFavoriteContext.Provider>
  );
};

export default MockContexProviderWithValue;
