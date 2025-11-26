import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/next";
import "./index.css";
import App from "./App.tsx";
import ScrollWrapper from "./components/scroll-wrapper";

createRoot(document.getElementById("root")!).render(
  
    <ScrollWrapper>
      <App />
      <Analytics></Analytics>
    </ScrollWrapper>

);
