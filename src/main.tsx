import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n/config";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import SmoothScroll from "./components/SmoothScroll";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </ThemeProvider>
  </StrictMode>
);
