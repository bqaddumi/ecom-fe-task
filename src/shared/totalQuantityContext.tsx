import { createContext, ReactNode, useContext, useReducer } from "react";

const defaultState = {
  totalQuantity: 0,
};

export type ActionType = {
  type: "set";
  totalQuantity: number;
};
export type State = typeof defaultState;
export type Dispatch = (action: ActionType) => void;

const TotalQuantityContext = createContext<{
  state: State;
  dispatch: Dispatch;
} | null>(null);

const totalQuantityReducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case "set":
      return { totalQuantity: 0 | action.totalQuantity };
  }
};

export function TotalQuantityProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(totalQuantityReducer, defaultState);
  return (
    <TotalQuantityContext.Provider value={{ state, dispatch }}>
      {children}
    </TotalQuantityContext.Provider>
  );
}

export const useTotalQuantity = () => {
  const totalQuantity = useContext(TotalQuantityContext);
  if (!totalQuantity)
    throw new Error(
      "useTotalQuantity must be used inside a totalQuantity provider"
    );

  return totalQuantity;
};
