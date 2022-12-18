import styled from "@emotion/styled";
const CartProcess = () => {
  const ArrowNext = "/assets/icon/arrow_next.png";
  return (
    <div>
      <PurchaseProcess>
        <span>01 SHOPPING </span>
        <IconImg src={ArrowNext} />
        <span>BAG 02 ORDER </span>
        <IconImg src={ArrowNext} />
        <span> 03 ORDER CONFIRMED</span>
      </PurchaseProcess>
    </div>
  );
};

const IconImg = styled.img`
  width: 6px;
  height: 8px;
  padding: 4px 10px;
`;

const PurchaseProcess = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  padding: 40px 0px 38px;
  margin-top: 45px;
`;

export default CartProcess;
