//src/App.jsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/rootLayout";
import LandingPage from "./pages/landing";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/offers";
import ProductsPage from "./pages/products";
import OtherBrands from "./pages/otherProducts"
import Samsungs from "./pages/samsungProducts";
import Portfolio from "./pages/medical_Portfolio";
import Contact from "./pages/contact";
import NotFoundPage from "./components/404";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/services",
          element: <ServicesPage />
        },
        {
          path: "/products",
          element: <ProductsPage />
        },
        {
          path: "/portfolio",
          element: <Portfolio />
        },
        {
          path: "/products/samsung-products",
          element: <Samsungs />
        },
        {
          path: "/products/other-brands",
          element: <OtherBrands />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "*", // This is the catch-all route
          element: <NotFoundPage />
        }
      
      ],
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
