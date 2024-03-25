import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { AdminPage } from "./pages/AdminPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { StatusPage } from "./pages/StatusPage.jsx";
import Layout from "./pages/Layout.jsx";
import { LoginContextProvider } from "./context/loginContext.jsx";
import { OrderContextProvider } from "./context/OrderContext.jsx";
import CartPage from "./pages/CartPage.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/status",
        element: <StatusPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <OrderContextProvider>
        <RouterProvider router={router} />
      </OrderContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
