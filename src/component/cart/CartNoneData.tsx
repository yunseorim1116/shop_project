import styled from "@emotion/styled";
import Button from "../share/Button";
import CartProcess from "./CartProcess";

const CartNoneData = () => {
  return (
    <>
      <CartNoneDataContainer>
        <AlertNoneDataText>장바구니에 담은 상품이 없습니다.</AlertNoneDataText>
      </CartNoneDataContainer>
    </>
  );
};

const CartNoneDataContainer = styled.div`
  font-family: "NotoSansKR";
  padding: 150px 0px;
  border-top: 4px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
`;

const AlertNoneDataText = styled.p`
  margin-bottom: 25px;
`;

export default CartNoneData;
