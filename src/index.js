import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { ContextController } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ContextController>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextController>
  </React.StrictMode>,
  document.getElementById("root")
);
