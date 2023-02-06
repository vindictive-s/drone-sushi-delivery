import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Checkout from "./routes/Checkout";
import Basket from "./routes/Basket";
import ErrorPage from "./routes/ErrorPage";
import App from "./App";

const AppLayout = () => {
  return (
    <>
      <App />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "basket",
    element: <Basket />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
