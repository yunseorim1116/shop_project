import styled from "@emotion/styled";

export interface IProps {
  totalPrice: number;
  totalCartedLength: number;
  discountPrice?: number;
}

const CartTotalPrice = ({
  totalPrice,
  totalCartedLength,
  discountPrice,
}: IProps) => {
  return (
    <>
      <CartedInfoWrap>
        <TotalPriceText>총 주문금액</TotalPriceText>
        <div>
          <TotalPrice>{totalPrice?.toLocaleString()}원</TotalPrice>
          {discountPrice !== 0 && (
            <DiscountRate>- {discountPrice?.toLocaleString()} 원</DiscountRate>
          )}
        </div>
      </CartedInfoWrap>
      <TotalAmount>총 {totalCartedLength}가지 상품</TotalAmount>
    </>
  );
};

const DiscountRate = styled.div`
  color : #8e8e8e
  position: absolute;
  margin-top:8px;
  text-align : right;
`;

const TotalPriceText = styled.div`
  font-size: 18px;
`;
const TotalPrice = styled.div`
  font-size: 32px;
  font-family: "NotoSansKR";
`;
const TotalAmount = styled.p`
  padding: 5px;
  margin: 15px;
  text-align: right;
  font-size: 18px;
  color: #515151;
`;

const CartedInfoWrap = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 4px solid rgb(0, 0, 0);
  border-bottom: 1px solid;
  padding: 30px 12px;
`;

export default CartTotalPrice;
