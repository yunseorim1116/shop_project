import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import useCartStore from "../../store/cartStore";
import { Cart } from "../../navigation/routePath";

const MainHeaderContainer = () => {
  const navigate = useNavigate();
  const storeCart = useCartStore((state) => state.cartedProduct);

  const goToCartPage = () => {
    navigate(Cart);
  };

  return (
    <HeaderContainer>
      <HeaderWrapDiv>
        <div>
          <HeaderTitle>React </HeaderTitle>
          <HeaderTitle>TypeScript</HeaderTitle>
          <HeaderTitle>Zustand</HeaderTitle>
          <HeaderTitle>JavaScript</HeaderTitle>
        </div>

        <div onClick={goToCartPage}>
          {storeCart.length !== 0 && (
            <CartedNumber>{storeCart.length}</CartedNumber>
          )}
          <CartIcon src="/assets/icon/basket.svg" />
        </div>
      </HeaderWrapDiv>
    </HeaderContainer>
  );
};

const CartedNumber = styled.div`
  font-family: "Mulish";
  position: absolute;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background: rgb(255, 72, 0);
  width: 28px;
  height: 28px;
  right: 37px;
  border-radius: 50px;
`;

const HeaderWrapDiv = styled.div`
  height: 150px;
  font-family: "NotoSansKR";
  background-color: white;
  border-bottom: 1px solid rgb(212, 212, 212);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  font-weight: 700;
  font-size: 15px;
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 99;
`;

const HeaderTitle = styled.span`
  font-size: 45px;
  margin-right: 40px;
  &:hover {
    text-decoration: underline;
  }
`;

const CartIcon = styled.img`
  width: 60px;
  margin-right: 25px;
`;

export default MainHeaderContainer;
