import { Routes, Route } from "react-router-dom";
import CartPage from "../views/CartPage";
import MainHomePage from "../views/MainHomePage";
import ProductDetailPage from "../views/ProductDetailPage";
import CheckOrderPage from "../views/CheckOrderPage";
import { Home, Products, ProductsDetail, Cart, Checkout } from "./routePath";
import { Global } from "@emotion/react";
import globalStyle from "../style/globalStyle";
import LayoutContainer from "../layout/LayoutContainer";
import ScrollToTop from "../ScrollToTop";

const AppRouter = () => {
  return (
    <>
      <LayoutContainer>
        <ScrollToTop />
        <Global styles={globalStyle} />
        <Routes>
          <Route path={Home} element={<MainHomePage />} />
          <Route path={Products} element={<MainHomePage />} />
          <Route path={ProductsDetail} element={<ProductDetailPage />} />
          <Route path={Cart} element={<CartPage />} />
          <Route path={Checkout} element={<CheckOrderPage />} />
        </Routes>
      </LayoutContainer>
    </>
  );
};

export default AppRouter;
