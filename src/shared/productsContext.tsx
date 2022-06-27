import { createContext, ReactNode, useContext, useReducer } from "react";
import { ProductType } from "../types";

const defaultState = {
  products: [],
};

export type ActionType = {
  type: "set";
  products: ProductType[] | any;
};
export type State = typeof defaultState;
export type Dispatch = (action: ActionType) => void;

const ProductsContext = createContext<{
  state: State;
  dispatch: Dispatch;
} | null>(null);

const productsReducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case "set":
      return { products:  action.products };
  }
};

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(productsReducer, defaultState);
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  const products = useContext(ProductsContext);
  if (!products)
    throw new Error("useProducts must be used inside a products provider");

  return products;
};
