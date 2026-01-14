import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home.react";
import About from "./About.react";
import Cast from "./Cast.react";
import Episodes from "./Episodes.react";
import reportWebVitals from "./reportWebVitals";

import { createHashRouter, RouterProvider } from "react-router";

// Fix for percent-encoded hash links (e.g., #/about%23page-top -> #/about#page-top)
// This happens when URLs with double hashes are shared/copied
(function fixEncodedHashLinks() {
  const hash = window.location.hash;
  if (hash.includes("%23")) {
    const decoded = decodeURIComponent(hash);
    const [route, anchor] = decoded.split("#").filter(Boolean);

    // Update URL without the anchor part (router handles the route)
    window.history.replaceState(null, "", `#/${route}`);

    // Scroll to anchor after page loads
    if (anchor) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          const element = document.getElementById(anchor);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      });
    }
  }
})();

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
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
