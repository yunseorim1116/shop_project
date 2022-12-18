import { cartedItemType } from "../../type/productType";
import styled from "@emotion/styled";
import { useEffect } from "react";
import ProductInfo from "../share/ProductInfo";

export interface IProps {
  setCheckProduct: React.Dispatch<React.SetStateAction<cartedItemType[]>>;
  checkProduct: cartedItemType[];
  product: cartedItemType;
  plusAmount: (cartedItem: cartedItemType) => void;
  minusAmount: (cartedItem: cartedItemType) => void;
  toggleCheckingProduct: (
    e: React.ChangeEvent<HTMLInputElement>,
    product: cartedItemType
  ) => void;
}
const CartItem = ({
  setCheckProduct,
  checkProduct,
  product,
  toggleCheckingProduct,
  plusAmount,
  minusAmount,
}: IProps) => {
  useEffect(() => {
    setCheckProduct((prev: cartedItemType[]) => [...prev, product]);
  }, []);

  return (
    <>
      <ProductWrap>
        <CheckBoxWrap>
          <input
            type="checkbox"
            checked={checkProduct.includes(product) ? true : false}
            onChange={(e) => toggleCheckingProduct(e, product)}
          />
        </CheckBoxWrap>

        <ProductInfo product={product} />

        <ProductAmount>
          <StyleDiv>
            <CartAmountIcon
              src="/assets/icon/plus.png"
              onClick={(e) => {
                e.preventDefault();
                plusAmount(product);
              }}
            />
            <ProductTotalAmount> {product.amount}</ProductTotalAmount>

            <CartAmountIcon
              src="/assets/icon/minus.png"
              onClick={(e) => {
                e.preventDefault();
                minusAmount(product);
              }}
            />
          </StyleDiv>
        </ProductAmount>
        <ProductPrice>{product.totalPrice?.toLocaleString()}</ProductPrice>
      </ProductWrap>
    </>
  );
};

const CartAmountIcon = styled.img`
  cursor: pointer;
  padding: 6px;
  width: 26px;
  align-items: center;
`;

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductTotalAmount = styled.p`
  font-size: 18px;
  font-family: "NotoSansKR";
`;

const ProductWrap = styled.div`
  font-family: "NotoSansKR-Light";
  font-size: 8px;
  display: table;
  width: 100%;
  table-layout: fixed;
  text-align: center;
`;

const CheckBoxWrap = styled.div`
  width: 4.3%;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  border-top: 1px solid rgb(228, 228, 228);
`;

const ProductAmount = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid rgb(228, 228, 228);
  border-width: 1px 1px 0px;
  border-style: solid;
  border-color: rgb(228, 228, 228);
`;

const ProductPrice = styled.div`
  font-family: "NotoSansKR";
  font-size: 28px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid rgb(228, 228, 228);
`;

export default CartItem;
