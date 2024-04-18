import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Location from "./components/Location/Location.jsx";
import Products from "./components/Products/Products.jsx";
import Frappe from "./components/Products/Frappe.jsx";
import Tea from "./components/Products/Tea.jsx";
import Coffee from "./components/Products/Coffee.jsx";
import Pastries from "./components/Products/Pastries.jsx";
import FAQ from "./components/Faqs/FAQ.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/frappe",
    element: <Frappe />
  },
  {
    path: "/tea",
    element: <Tea />
  },
  {
    path: "/Coffee",
    element: <Coffee />
  },
  {
    path: "/pastries",
    element: <Pastries/>
  },
  { 
    path: "/Faqs",
    element: <FAQ/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
