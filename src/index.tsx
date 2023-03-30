import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { client } from "./client/apolloClient";
import "./index.css";

import { ApolloProvider } from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
