import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { DarkThemeProvider } from "./shared/darkThemeContext";
import { TotalQuantityProvider } from "./shared/totalQuantityContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <TotalQuantityProvider>
    <DarkThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkThemeProvider>
  </TotalQuantityProvider>
);
