import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ScrollWrapper from "./components/scroll-wrapper";

createRoot(document.getElementById("root")!).render(
    <ScrollWrapper>
      <App />
    </ScrollWrapper>
);
