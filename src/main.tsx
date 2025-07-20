
import React from "react";
import { createRoot }  from "react-dom/client";
import App from "./components/App/App.tsx";
import "modern-normalize";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
