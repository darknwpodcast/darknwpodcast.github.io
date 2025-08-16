import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home.react";
import Cast from "./Cast.react";
import Episodes from "./Episodes.react";
import reportWebVitals from "./reportWebVitals";

import { createHashRouter, RouterProvider } from "react-router";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cast",
    element: <Cast />,
  },
    {
    path: "/episodes",
    element: <Episodes />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
