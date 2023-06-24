import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// dev-6p8so1ccsg3h45o5.us.auth0.com
// HJ1czHAfdzR57cX0ifwfRJ8EPQH2q8cF

root.render(
  <Auth0Provider
    domain="dev-6p8so1ccsg3h45o5.us.auth0.com"
    clientId="HJ1czHAfdzR57cX0ifwfRJ8EPQH2q8cF"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
