import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import PageHome from "./pages/home/PageHome";
import PageProductCategories from "./pages/catalog/productCategories/PageProductCategories";
import NotFound from "./pages/not-found/NotFound";

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
        path: "/catalog/categories",
        element: <PageProductCategories />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);