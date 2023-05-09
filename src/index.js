import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";


// creating the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"/>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
