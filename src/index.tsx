import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { DarkThemeProvider } from "./shared/context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <DarkThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DarkThemeProvider>
);
