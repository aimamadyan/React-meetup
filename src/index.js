import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FavsContextProvider } from "./store/favorites-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavsContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavsContextProvider>
);