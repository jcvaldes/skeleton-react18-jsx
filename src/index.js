import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <main>
      <App />
    </main>
  </React.StrictMode>
);
