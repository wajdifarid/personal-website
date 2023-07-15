import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TagManager from 'react-gtm-module';
import "./index.css";

import App from "./App";

const gtmId = process.env.REACT_APP_GTM_ID;
TagManager.initialize({ gtmId });

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
