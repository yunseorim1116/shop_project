import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ModalPortal from "../../PortalModal";
import CartItem from "../../component/cart/CartItem";
import CartItemHeader from "../../component/cart/CartItemHeader";
import CartNoneData from "../../component/cart/CartNoneData";
import CartProcess from "../../component/cart/CartProcess";
import CartTotalPrice from "../../component/share/CartTotalPrice";
import CartButton from "../../component/share/Button";
import { Modal } from "../../component/share/Modal";
import useCartStore from "../../store/cartStore";
import { cartedItemType } from "../../type/productType";
import { calculatePrice } from "../../util/processData";
import {
  continueButtonData,
  checkoutButtonData,
} from "../../common/cartButtonStyle";
import { Home, Checkout } from "../../navigation/routePath";

const CartContainer = () => {
  const navigate = useNavigate();

  const setCheckOrderItem = useCartStore((state) => state.setCheckOrderItem);
  const storeCart = useCartStore((state) => state.cartedProduct);
  const plusCartAmount = useCartStore((state) => state.plusCartAmount);
  const minusCartAmount = useCartStore((state) => state.minusCartAmount);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isCheckAll, setIsCheckAll] = useState(true);
  const [checkProduct, setCheckProduct] = useState<cartedItemType[]>([]);
  const [modalOn, setModalOn] = useState(false);
  const [modalText, setModalText] = useState("");

  const plusAmount = (cartedItem: cartedItemType) => {
    const { amount } = cartedItem;

    if (amount >= 3) showAlert("3개 이상 주문이 불가능합니다.");
    plusCartAmount(cartedItem);
  };

  const minusAmount = (cartedItem: cartedItemType) => {
    minusCartAmount(cartedItem);
  };

  const showAlert = (text: string) => {
    setModalOn(true);
    setModalText(text);
    setTimeout(() => setModalOn(false), 800);
  };
  const calculateCheckPrice = (product: cartedItemType) => {
    if (!totalPrice) return;

    const { totalPrice: productTotalPrice } = product;

    if (product.isNoneCheck) {
      const calculatedPrice = totalPrice - productTotalPrice;
      setTotalPrice(calculatedPrice);
      return;
    }

    const calculatedPrice = totalPrice + productTotalPrice;
    setTotalPrice(calculatedPrice);
  };

  const checkAllProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    if (checked) {
      setIsCheckAll(true);
      setCheckProduct(storeCart);
      return;
    }
    setIsCheckAll(false);
    setCheckProduct([]);
  };

  const toggleCheckingProduct = (
    e: React.ChangeEvent<HTMLInputElement>,
    product: cartedItemType
  ) => {
    const checked = e.target.checked as boolean;

    if (!checked) {
      const newCheckedProduct = checkProduct.filter(
        (check: cartedItemType) => product !== check
      );

      product.isNoneCheck = true;
      calculateCheckPrice(product);
      setCheckProduct(newCheckedProduct);
    }

    if (checked) {
      product.isNoneCheck = false;
      calculateCheckPrice(product);
      setCheckProduct([...checkProduct, product]);
    }
  };

  const checkProductOrder = () => {
    if (!checkProduct.length) {
      showAlert("원하시는 상품을 선택해주세요.");
      return;
    }
    setCheckOrderItem(checkProduct);
    goToOrderPage();
  };

  const goToCartPage = () => {
    navigate(Home);
  };

  const goToOrderPage = () => {
    navigate(Checkout);
  };

  useEffect(() => {
    if (storeCart.length === checkProduct.length) {
      const totalPrice = calculatePrice(storeCart);
      setTotalPrice(totalPrice);
      setIsCheckAll(true);
      return;
    }
    const totalPrice = calculatePrice(checkProduct);
    setTotalPrice(totalPrice);
    setIsCheckAll(false);
  }, [checkProduct, storeCart]);

  return (
    <CartContentContainer>
      <ModalPortal>{modalOn && <Modal text={modalText} />}</ModalPortal>
      <CartProcess />
      {!storeCart.length ? (
        <CartNoneData />
      ) : (
        <>
          <CartContentWrap>
            <CartItemHeader
              isCheckAll={isCheckAll}
              checkAllProduct={checkAllProduct}
            />

            {storeCart.map((product: cartedItemType) => {
              return (
                <CartItem
                  key={`${product.productId}:${product.productName}`}
                  setCheckProduct={setCheckProduct}
                  checkProduct={checkProduct}
                  product={product}
                  toggleCheckingProduct={toggleCheckingProduct}
                  plusAmount={plusAmount}
                  minusAmount={minusAmount}
                />
              );
            })}
          </CartContentWrap>

          <CartTotalPrice
            totalPrice={totalPrice}
            totalCartedLength={checkProduct.length}
          />
        </>
      )}
      <StyleDiv>
        <CartButton
          height={height}
          width={width}
          padding={padding}
          content={continueContent}
          color={continueColor}
          fontSize={fontSize}
          backgroundColor={continueBackGround}
          buttonFunction={goToCartPage}
        />
        {storeCart.length ? (
          <CartButton
            height={height}
            width={width}
            padding={padding}
            content={content}
            color={color}
            fontSize={fontSize}
            backgroundColor={backgroundColor}
            buttonFunction={checkProductOrder}
          />
        ) : (
          ""
        )}
      </StyleDiv>
    </CartContentContainer>
  );
};

const { height, width, padding, content, color, fontSize, backgroundColor } =
  checkoutButtonData;
const {
  content: continueContent,
  backgroundColor: continueBackGround,
  color: continueColor,
} = continueButtonData;

const StyleDiv = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: center;
`;

const CartContentContainer = styled.div`
  margin-top: 160px;
  padding: 0px 60px;
`;

const CartContentWrap = styled.div`
  font-size: 12px;
  color: rgb(76, 76, 76);
  border-bottom: 1px solid rgb(0, 0, 0);
  margin-bottom: 50px;
`;

export default CartContainer;
