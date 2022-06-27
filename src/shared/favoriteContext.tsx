import { createContext, ReactNode, useContext, useReducer } from "react";

const defaultState = {
  totalFavorite: 0,
};

export type ActionType = {
  type: "set" | "add" | "remove";
  totalFavorite: number;
};
export type State = typeof defaultState;
export type Dispatch = (action: ActionType) => void;

const TotalFavoriteContext = createContext<{
  state: State;
  dispatch: Dispatch;
} | null>(null);

const totalFavoriteReducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case "set":
      return { totalFavorite: 0 | action.totalFavorite };
    case "add":
      return { totalFavorite: state.totalFavorite + 1 };
    case "remove":
      return { totalFavorite: state.totalFavorite - 1 };
  }
};

export function TotalFavoriteProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(totalFavoriteReducer, defaultState);
  return (
    <TotalFavoriteContext.Provider value={{ state, dispatch }}>
      {children}
    </TotalFavoriteContext.Provider>
  );
}

export const useTotalFavorite = () => {
  const totalFavorite = useContext(TotalFavoriteContext);
  if (!totalFavorite)
    throw new Error(
      "useTotalFavorite must be used inside a totalFavorite provider"
    );

  return totalFavorite;
};
