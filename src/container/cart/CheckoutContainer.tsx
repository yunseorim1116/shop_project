import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CouponContainer from "./CouponContainer";
import ProductInfo from "../../component/share/ProductInfo";
import CartTotalPrice from "../../component/share/CartTotalPrice";
import Button from "../../component/share/Button";
import { RATE, AMOUNT } from "../../common/string";
import { decideOrderButtonData } from "../../common/productButtonStyle";
import {
  calculatePrice,
  checkAvailableCoupon,
  checkNoneAvailableCoupon,
} from "../../util/processData";
import { couponDataType } from "../../type/couponType";
import useCartStore from "../../store/cartStore";
import useOrderStore from "../../store/orderStore";
import ModalPortal from "../../PortalModal";
import { Modal } from "../../component/share/Modal";

const CheckoutOrderContainer = () => {
  const couponDataTypeInit: couponDataType = {
    type: "",
    couponTitle: "",
    discountAmount: 0,
    discountRate: 0,
  };

  const navigate = useNavigate();
  const resetCart = useCartStore((state) => state.resetCart);
  const setOrderList = useOrderStore((state) => state.setOrderList);

  const checkedProduct = useCartStore((state) => state.checkedProduct);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [couponData, setCouponData] = useState<couponDataType[]>([]);
  const [selectCouponData, setSelectCouponData] =
    useState<couponDataType>(couponDataTypeInit);
  const [isSelectCoupon, setIsSelectCoupon] = useState(false);
  const [modalOn, setModalOn] = useState(false);

  const [discountPrice, setDiscountPrice] = useState(0);

  const decideOrder = () => {
    setOrderList(checkedProduct);
    setModalOn(true);
    resetCart();
    setTimeout(() => navigate("/"), 1000);
  };

  const selectCoupon = (coupon: couponDataType) => {
    if (isSelectCoupon) {
      setSelectCouponData(couponDataTypeInit);
      setIsSelectCoupon(!isSelectCoupon);
      return;
    }
    setIsSelectCoupon(!isSelectCoupon);
    setSelectCouponData(coupon);
  };

  useEffect(() => {
    const totalPrice = calculatePrice(checkedProduct);
    setTotalPrice(totalPrice);
  }, []);

  useEffect(() => {
    if (!isSelectCoupon) {
      const totalPrice = calculatePrice(checkedProduct);
      setDiscountPrice(0);
      setTotalPrice(totalPrice);
      return;
    }

    if (selectCouponData.type === AMOUNT) {
      //AMOUNT쿠폰로직
      if (!selectCouponData.discountAmount) selectCouponData.discountAmount = 0;
      if (!totalPrice) return;

      const { discountAmount } = selectCouponData;

      const discountPrice = discountAmount;
      const resultPrice = totalPrice - discountPrice;

      resultPrice < 0 ? setTotalPrice(0) : setTotalPrice(resultPrice);

      setDiscountPrice(discountPrice);
    }

    if (selectCouponData.type === RATE) {
      //RATE쿠폰로직
      const { discountRate } = selectCouponData;

      const noneCouponPrice = calculatePrice(
        checkNoneAvailableCoupon(checkedProduct)
      );
      const couponDataPrice = calculatePrice(
        checkAvailableCoupon(checkedProduct)
      );

      const discountPrice = couponDataPrice * (discountRate! / 100);
      const totalPrice = noneCouponPrice + couponDataPrice;
      const resultPrice = totalPrice - discountPrice;
      setDiscountPrice(discountPrice);
      setTotalPrice(resultPrice);
      setDiscountPrice(discountPrice);
    }
  }, [isSelectCoupon]);

  return (
    <>
      <ModalPortal>{modalOn && <Modal text="주문 성공!" />}</ModalPortal>
      <CheckoutContainer>
        <CouponContainer
          setCouponData={setCouponData}
          couponData={couponData}
          selectCouponData={selectCouponData}
          selectCoupon={selectCoupon}
        />
        <CheckoutInfoWrap>
          <CheckoutInfoHeader>
            주문상품정보 / 총 {checkedProduct.length}개
          </CheckoutInfoHeader>
          <CheckProductInfoWrap>
            {checkedProduct.map((product) => {
              return (
                <>
                  <ProductInfo
                    product={product}
                    totalAmount={product.amount}
                  ></ProductInfo>
                </>
              );
            })}
          </CheckProductInfoWrap>
          <CartTotalPrice
            discountPrice={discountPrice}
            totalPrice={totalPrice}
            totalCartedLength={checkedProduct.length}
          />
        </CheckoutInfoWrap>
      </CheckoutContainer>
      <ButtonWrap>
        <Button
          height={height}
          width={width}
          padding={padding}
          content={content}
          color={color}
          fontSize={fontSize}
          backgroundColor={backgroundColor}
          buttonFunction={decideOrder}
        />
      </ButtonWrap>
    </>
  );
};

const { height, width, padding, content, color, fontSize, backgroundColor } =
  decideOrderButtonData;

const CheckProductInfoWrap = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: red;
  max-height: 400px;
  overflow: scroll;
`;
const ButtonWrap = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckoutInfoHeader = styled.p`
  font-family: "NotoSansKR";
  border-bottom: 1px solid rgb(0, 0, 0);
  padding: 25px 0px;
  font-size: 32px;
`;

const CheckoutInfoWrap = styled.div`
  height: 600px;
  width: 400px;
  padding: 30px;
  border: 4px solid rgb(0, 0, 0);
`;

const CheckoutContainer = styled.div`
  margin: 160px;
  display: flex;
  justify-content: space-evenly;
`;

export default CheckoutOrderContainer;
