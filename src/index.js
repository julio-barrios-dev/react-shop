import React from "react";
import ReactDOM from "react-dom/client";
import App  from "./routes/App"

const rootElemnt= document.getElementById('app');
const root = ReactDOM.createRoot(rootElemnt);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  );

