import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import PageHome from "./pages/home/PageHome";
import PageProduct from "./pages/catalog/product/PageProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
          index: true,
          element: <PageHome />
      },
      {
        path: "/catalog/products",
        element: <PageProduct />
      }
    ]
  },
  {
    path: "*",
    element: <div>404</div>
  }
]);