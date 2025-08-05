// resmanui-host/src/main.tsx
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from './auth/AuthContext';
import AppRoutes from "./app/routes/AppRoutes";
import App from "./App";
// import { client } from './lib/apiClient';
// import "./styles/tailwind-v4.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   {/* <ApolloProvider client={client}> */}
  //   {/* <AuthProvider> */}
  //   <BrowserRouter>
  //     <AppRoutes />
  //   </BrowserRouter>
  //   {/* </AuthProvider> */}
  //   {/* </ApolloProvider> */}
  // </React.StrictMode>
   <StrictMode>
    <App />
  </StrictMode>,
);
