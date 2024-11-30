import React from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./context/GlobalContext"; // Periksa jalur ini
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
