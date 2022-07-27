import { createContext, ReactNode, useContext, useReducer } from 'react';

const defaultState = {
  isDark: false,
};

export type ActionType = 'toggle';
export type State = typeof defaultState;
export type Dispatch = (action: ActionType) => void;

const DarkThemeContext = createContext<{
  state: State;
  dispatch: Dispatch;
} | null>(null);

const darkThemeReducer = (state: State, action: ActionType) => {
  switch (action) {
    case 'toggle':
      return { isDark: !state.isDark };
  }
};

export function DarkThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(darkThemeReducer, defaultState);
  return (
    <DarkThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkThemeContext.Provider>
  );
}

export const useDarkTheme = () => {
  const darkTheme = useContext(DarkThemeContext);
  if (!darkTheme) {
    throw new Error('useDarkTheme must be used inside a darkTheme provider');
  }

  return darkTheme;
};
