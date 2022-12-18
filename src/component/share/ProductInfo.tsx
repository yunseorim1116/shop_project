import styled from "@emotion/styled";
import { cartedItemType } from "../../type/productType";
export interface IProps {
  product: cartedItemType;
  totalAmount?: number;

  isOrderList?: any;
}

const ProductInfo = ({ product, totalAmount, isOrderList }: IProps) => {
  const { imgUrl, productName, productPrice, availableCoupon } = product;
  return (
    <ProductInfoContainer>
      <ProductInfos>
        <ProductImg src={imgUrl} />
        <ProductInfoWrap>
          <ProductNameText> {productName}</ProductNameText>
          <DisplayText>
            <ProductPriceText>{productPrice.toLocaleString()}</ProductPriceText>
            {totalAmount ? (
              <ProductTotalAmount>/{totalAmount}개</ProductTotalAmount>
            ) : (
              ""
            )}
            {!availableCoupon && <CouponText>RATE쿠폰적용불가</CouponText>}
            {isOrderList ? (
              <OrderWrap>
                <CompleteOrder>구매완료</CompleteOrder>
              </OrderWrap>
            ) : (
              ""
            )}
          </DisplayText>
        </ProductInfoWrap>
      </ProductInfos>
    </ProductInfoContainer>
  );
};
const OrderWrap = styled.div`
  position: absolute;
  bottom: 0px;
`;
const CompleteOrder = styled.div`
  opacity: 0.4;
  border-radius: 4px;
  color: rgb(255, 35, 35);
  padding: 6px;
  border: 1px solid rgb(255, 35, 35);
  transform: rotate(-20deg);
`;

const DisplayText = styled.div`
  text-align: left;
`;

const CouponText = styled.p`
  font-size: 8px;
  text-algin: left;
  margin-top: 4px;
  color: #a4a4a4;
`;

const ProductTotalAmount = styled.span`
  font-size: 9px;
  color: #505050;
`;

const ProductNameText = styled.p`
  padding-right: 5px;
  text-align: left;
  font-size: 18px;
`;

const ProductPriceText = styled.span`
  font-size: 19px;
  font-family: "NotoSansKR";
`;

const ProductInfoWrap = styled.p`
  position: relative;
  padding: 5px 10px;
`;

const ProductImg = styled.img`
  padding: 10px;
  width: 80px;
  height: 80px;
`;

const ProductInfoContainer = styled.div`
  padding: 10px 0px;
  background-color: white;
  display: block;
  vertical-align: middle;
  text-align: center;
  border-top: 1px solid rgb(228, 228, 228);
`;

const ProductInfos = styled.div`
  display: flex;
  align-items: center;
`;

export default ProductInfo;
