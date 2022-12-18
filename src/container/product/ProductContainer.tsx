import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Pagination from "../../component/share/Pagination";
import ProductItemList from "../../component/product/ProductItemList";
import ProductInfo from "../../component/share/ProductInfo";
import { productItemType } from "../../type/productType";
import { fetchProduct } from "../../util/fetchProduct";
import { arrangeItemScore, divideCartedData } from "../../util/processData";
import useOrderStore from "../../store/orderStore";
import useCartStore from "../../store/cartStore";
import { element } from "prop-types";

const ProductContainer = () => {
  const [productData, setProductData] = useState<productItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [orderListToggle, setOrderListToggle] = useState(false);
  const [productName, setProductName] = useState<string>();

  const storeCart = useCartStore((state) => state.cartedProduct);
  const orderList = useOrderStore((state) => state.orderList);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const getData = async () => {
    const resultData: productItemType[] | null = await fetchProduct();
    if (!resultData) return;
    const sortedProductData = arrangeItemScore(resultData);
    setProductData(sortedProductData);
    setLoading(true);
    setProductName(sortedProductData[0].productName);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    currentPosts(productData);
  }, [productData]);

  const toggleOrderList = () => {
    setOrderListToggle(!orderListToggle);
  };

  const onIntersect = (element: Element) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        const watchProductName = entries[0].target.textContent as string;
        setProductName(watchProductName);
      },
      { threshold: 0.5 }
    );
    observer.observe(element);
  };

  useEffect(() => {
    const productNames = document.querySelectorAll(".product-name");
    productNames.forEach((ele) => {
      onIntersect(ele);
    });
  });

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const goToScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const setPageNationNumber = (number: number) => {
    setProductName("");
    goToScrollTop();
    setCurrentPage(number);
  };

  const currentPosts = (productData: productItemType[]) => {
    const currentPosts = productData.slice(
      indexOfFirst,
      indexOfLast
    ) as productItemType[];

    divideCartedData(currentPosts, storeCart);

    return currentPosts;
  };

  return (
    <>
      <ProductContainerDiv>
        {productName ? <WatchProductName>{productName}</WatchProductName> : ""}
        <ScrollTop onClick={goToScrollTop}>Go To Top!</ScrollTop>
        <ProductItemList productItemData={currentPosts(productData)} />
        <Pagination
          totalPosts={productData.length}
          postsPerPage={postsPerPage}
          setPaginateNumber={setPageNationNumber}
        />

        <OrderWrap>
          {orderList.length ? (
            <StyleDiv>
              <IconImg
                src="/assets/icon/arrow_next.png"
                onClick={toggleOrderList}
              />
            </StyleDiv>
          ) : (
            ""
          )}

          {orderListToggle
            ? orderList?.map((order) => (
                <OrderListBox>
                  <ProductInfo
                    product={order}
                    totalAmount={order.amount}
                    isOrderList={orderList}
                  />
                </OrderListBox>
              ))
            : ""}
        </OrderWrap>
      </ProductContainerDiv>
    </>
  );
};

const OrderListBox = styled.div``;

const StyleDiv = styled.div`
  margin: 0px 15px;
  height: 120px;
  cursor: pointer;
  border-top: 1px solid rgb(228, 228, 228);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconImg = styled.img`
  align-items: center;
  width: 6px;
`;

const WatchProductName = styled.div`
  font-family: "NotoSansKR";
  font-size: 32px;
  top: 145px;
  opacity: 0.9;
  border-bottom: 1px solid;
  padding: 40px 0px;
  z-index: 1;
  width: 100%;
  text-align: center;
  background-color: white;
  position: fixed;
`;
const OrderWrap = styled.div`
  opacity: 0.9;
  display: flex;
  border: 1px solid rgb(228, 228, 228);
  position: fixed;
  left: 0px;
  bottom: 0px;
`;

const ScrollTop = styled.div`
  z-index: 1;
  font-family: "NotoSansKR";
  box-shadow: 0px 0px 20px #5a5a5a;
  font-size: 24px;
  top: 245px;
  right: 55px;
  cursor: pointer;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: #181818;
  width: 105px;
  height: 105px;
  border-radius: 4px;
  color: white;
`;

const ProductContainerDiv = styled.div`
  font-family: "NotoSansKR-Light";
  margin-top: 150px;
`;

export default ProductContainer;
