import styled from "@emotion/styled";

export interface IProps {
  isCheckAll: boolean;
  checkAllProduct: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CartItemHeader = ({ isCheckAll, checkAllProduct }: IProps) => {
  return (
    <CartHeaderWrap>
      <CheckBoxWrap>
        <Input
          type="checkbox"
          checked={isCheckAll}
          onChange={checkAllProduct}
        ></Input>
      </CheckBoxWrap>
      <HeaderInfoText>상품정보</HeaderInfoText>
      <HeaderInfoText>수량</HeaderInfoText>
      <HeaderInfoText>주문금액</HeaderInfoText>
    </CartHeaderWrap>
  );
};
const Input = styled.input``;
const HeaderInfoText = styled.span`
  font-size: 23px;
  font-family: "NotoSansKR";
  display: table-cell;
  text-align: center;
`;
const CartHeaderWrap = styled.div`
  padding: 12px 0px;
  display: table;
  width: 100%;
  table-layout: fixed;
  border-top: 4px solid rgb(0, 0, 0);
`;
const CheckBoxWrap = styled.div`
  width: 4.3%;
  display: table-cell;
  vertical-align: middle;
  align-items: center;
  text-align: center;
`;

export default CartItemHeader;
