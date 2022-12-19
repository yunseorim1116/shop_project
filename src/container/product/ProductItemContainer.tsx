import { cartedItemType, productItemType } from "../../type/productType";
import styled from "@emotion/styled";
import useCartStore from "../../store/cartStore";
import { useNavigate } from "react-router";
import Button from "../../component/share/Button";
import { productSelectButtonData } from "../../common/productButtonStyle";
import { MINECART, EXPIRE } from "../../common/string";
import { setProductWithExpireTime } from "../../util/storage";
import { useEffect, useState } from "react";
import ModalPortal from "../../PortalModal";
import { Modal } from "../../component/share/Modal";

interface IProps {
  productItem: productItemType;
}

const ProductItemContainer = ({ productItem }: IProps) => {
  const navigate = useNavigate();
  const addCartItem = useCartStore((state) => state.addCartItem);
  const removeCartedItem = useCartStore((state) => state.removeCartedItem);
  const storeCart = useCartStore((state) => state.cartedProduct);

  const url = "http://localhost:3000";
  const [modalOn, setModalOn] = useState(false);
  const [modalText, setModalText] = useState("");

  const {
    productName,
    ProductName_kr,
    productPrice,
    productId,
    imgUrl,
    productScore,
    isCarted,
  } = productItem;

  const productData: cartedItemType = {
    productName: productName,
    productPrice: productPrice,
    productId: productId,
    amount: 1,
    imgUrl: imgUrl,
    availableCoupon: false,
    totalPrice: productPrice,
  };

  if (typeof productItem.availableCoupon === "undefined")
    productData.availableCoupon = true;

  // const goToDetailPage = () => {
  //   if (!productId) return;
  //   navigate(`ProductsDetail/${productId}`);
  // };

  const addCartProduct = () => {
    addCartItem(productData);
    showAlert("장바구니 담기");
  };

  const removeCartProduct = () => {
    const selectedItemId = productId;
    removeCartedItem(selectedItemId);
    showAlert("장바구니 빼기");
  };

  const showAlert = (text: string) => {
    setModalOn(true);
    setModalText(text);
    setTimeout(() => setModalOn(false), 800);
  };

  useEffect(() => {
    setProductWithExpireTime(MINECART, storeCart, EXPIRE);
  }, [storeCart]);

  return (
    <>
      <ModalPortal>{modalOn && <Modal text={modalText} />}</ModalPortal>
      <StyleLi>
        <ImgWrapDiv>
          <ScoreNumber>{productScore}</ScoreNumber>
          <ProductImg src={`${url}${imgUrl}`} />
        </ImgWrapDiv>
        <ProductName>{productName}</ProductName>
        <ProductNameKR className="product-name">{ProductName_kr}</ProductNameKR>
        <ProductPrice>{productPrice.toLocaleString()}</ProductPrice>
        {isCarted ? (
          <>
            <Button
              height={height}
              width={width}
              padding={padding}
              content={contentMinus}
              color={color}
              fontSize={fontSize}
              backgroundColor={backgroundColor}
              buttonFunction={removeCartProduct}
            />
          </>
        ) : (
          <>
            <Button
              height={height}
              width={width}
              padding={padding}
              content={contentPlus}
              color={color}
              fontSize={fontSize}
              backgroundColor={backgroundColor}
              buttonFunction={addCartProduct}
            />
          </>
        )}
      </StyleLi>

      <br />
    </>
  );
};

const {
  height,
  width,
  padding,
  contentPlus,
  contentMinus,
  color,
  fontSize,
  backgroundColor,
} = productSelectButtonData;

const ScoreNumber = styled.div`
  border-radius: 6px;
  opacity: 0.9;
  background-color: black;
  color: white;
  font-size: 18px;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50px;
  height: 50px;
`;

const ImgWrapDiv = styled.div`
  cursor: pointer;
  position: relative;
  margin: 10px;
  width: 600px;
  height: 600px;
`;

const ProductImg = styled.img`
  width: 600px;
  height: 600px;
  object-fit: cover;
  border-radius: 6px;
`;

const StyleLi = styled.li`
  width: 150px;
  margin: 60px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductName = styled.p`
  text-align: center;
  width: 580px;
  padding: 10px;
  font-size: 28px;
`;
const ProductNameKR = styled.p`
  color: #484848;
  text-align: center;
  width: 580px;
  font-size: 18px;
  margin-bottom: 30px;
`;

const ProductPrice = styled.p`
  text-align: center;
  width: 580px;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export default ProductItemContainer;
